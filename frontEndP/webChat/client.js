"use strict";
const getMessageTemplate = ({
   username,
   createdAt,
   message,
}) => {
   const divEl = document.createElement('div');
   divEl.innerHTML = `
   <div class="block p-5 rounded-lg shadow-lg bg-white mb-5">
   <div>
   <div class="font-medium mr-2">${username}</div>
   <div class="font-light text-gray-500">${createdAt}</div>
   </div>
   <p class="text-gray-800 font-light mt-3">
      ${message}
   </p>
</div>
   `;
   return divEl;
};

const socket = io("ws://192.168.1.105:4000", {
   extraHeaders: {
      "x-hillel-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXRsZSI6IkhpbGxlbCBGcm9udGVuZC1Qcm8ifQ.19_0-wYdfdgIWA6NVhnR0SKhqT7ZYwMF-Z908v-O"
   }
});

const chatMessageEl = document.getElementById("chat-messages");
socket.on('messages_list', (data) => {
   console.log("data", data);
   for (let i = 0; i < data.length; i++) {
      chatMessageEl.appendChild(getMessageTemplate(data[i]));
   }
});

socket.on('message_added', (messageObj) => {
   chatMessageEl.appendChild(getMessageTemplate(messageObj));
});
const formEl = document.getElementById('message-form');
formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
   event.preventDefault();
   const textAreaEl = document.getElementById('message');
   const {
      value
   } = textAreaEl;

   socket.emit('messages_list_update', {
      message: value,
      username: "Aleksandr Pashkevych",
   });
}