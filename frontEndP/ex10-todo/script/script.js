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
  return trEl;
}
function appendToTable(obj) {
tableBodyEl.appendChild(createTableItem(obj));
}