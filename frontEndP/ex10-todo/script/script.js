/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

const formEl = document.querySelector('.todo-form');
const nameEl = document.querySelector('[name="name"]');
const ownerEl = document.querySelector('[name="owner"]');
const statusEl = document.querySelector('[name="status"]');
const durationEl = document.querySelector('[name="duration"]');
const tableEl = document.querySelector('.todo-table');
const tableBodyEl = tableEl.querySelector('tbody');

const optionEl = document.createElement("option");
optionEl.text = "Rejected";
optionEl.value = "rejected";
statusEl.appendChild(optionEl);

let completedTasks = 0;

//&       FORM LISTENERS

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameEl.value;
  const owner = ownerEl.value;
  const status = statusEl.value;
  const duration = durationEl.value;
  const nameFieldIsValid = isElementValid(nameEl);
  const ownerFieldIsValid = isElementValid(ownerEl);
  const durationFieldIsValid = isElementValid(durationEl);

  if (nameFieldIsValid &&
    ownerFieldIsValid &&
    durationFieldIsValid &&
    statusEl.value != 'select-option') {

    appendToTable({
      name,
      owner,
      status,
      duration,
    });
  }
  if (statusEl.value === 'completed') {
    completedTasks = completedTasks + 1;
    updateCompletedTd();
  }

});
formEl.addEventListener('reset', (e) => {
  e.preventDefault();
  nameEl.value = "";
  ownerEl.value = "";
  durationEl.value = "";
  statusEl.value = "select-option";
});

function isEmpty(value) {
  return (value.trim().length === 0);
}

function validateNameField(e) {
  return isElementValid(e.target);
}

function isElementValid(element) {
  const value = element.value;
  let result = false;
  let validSymbols = /^[a-zA-Z]/;
  if (element.name == 'owner') {
    validSymbols = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  } else if (element.name == 'duration') {
    validSymbols = /^\d+$/;
  }
  if (!validSymbols.test(value)) {
    element.classList.add('error');
  } else {
    element.classList.remove('error');
    result = true;
  }
  return result;
}

nameEl.addEventListener('change', validateNameField);
nameEl.addEventListener('blur', validateNameField);

ownerEl.addEventListener('change', validateNameField);
ownerEl.addEventListener('blur', validateNameField);


durationEl.addEventListener('change', validateNameField);
durationEl.addEventListener('blur', validateNameField);

//&      TABLE

function createTableItem(obj) {
  const trEl = document.createElement("tr");
  Object.entries(obj).forEach(([key, value]) => {
    const tdEl = document.createElement('td');
    tdEl.innerText = value;
    trEl.appendChild(tdEl);
  });
  const removeButton = createRemoveButton();
  trEl.appendChild(removeButton);
  return trEl;
}

function appendToTable(obj) {
  tableBodyEl.appendChild(createTableItem(obj));
}

function updateCompletedTd() {
  const completedResultEl = tableEl.querySelector('td.completed-tasks');
  completedResultEl.innerText = completedTasks;
}

function createRemoveButton() {
  const tdEl = document.createElement('td');
  const buttonEl = document.createElement('button');
  buttonEl.innerText = "Remove";
  tdEl.appendChild(buttonEl);

  function handleClickRemoveButton(target) {
    buttonEl.removeEventListener('click', handleClickRemoveButton);
    (target).remove();
    isTrCompleted(target);
  }

  function isTrCompleted(row) {
    const rowEl = row.querySelectorAll('td');
    rowEl.forEach(item => {
      if (item.innerText === 'completed') {
        completedTasks = completedTasks - 1;
      }
    });
    updateCompletedTd();
  }

  buttonEl.addEventListener('click', (e) => {
    const target = e.target.parentNode.parentNode;
    handleClickRemoveButton(target);
  });
  return tdEl;
}