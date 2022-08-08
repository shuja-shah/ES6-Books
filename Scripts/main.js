import displayBox from './Modules/displayBox.js';
import Intialize from './Modules/initial.js';
import myStorage from './Modules/myStorage.js';
import { DateTime } from './Modules/luxon.js';

const getAppended = document.getElementById('book-container');

document.addEventListener('DOMContentLoaded', displayBox.displayBooks());
document.getElementById('form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Math.floor(Math.random() * 1000) + 1;
  id.toString();
  e.preventDefault();
  const newBook = new Intialize(title, author, id);
  displayBox.addBookToList(newBook);
  displayBox.clearFields();
  myStorage.addition(newBook);
});
getAppended.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
  const tity = parseInt(e.target.parentElement.children[2].innerText, 10);
  myStorage.remove(tity);
});
const getList = document.querySelector('.list');
const getAddNew = document.querySelector('.add_new');
const getContact = document.querySelector('.contact');
getList.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.add-block').style.visibility = 'hidden';
  document.querySelector('.add-block').style.position = 'absolute';
  document.querySelector('.contactsection').style.visibility = 'hidden';
  document.querySelector('.contactsection').style.position = 'absolute';
  document.querySelector('.list-block').style.position = 'relative';
  document.querySelector('.list-block').style.visibility = 'visible';
  document.querySelectorAll('header a').forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');
});
getAddNew.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.list-block').style.visibility = 'hidden';
  document.querySelector('.list-block').style.position = 'absolute';
  document.querySelector('.contactsection').style.visibility = 'hidden';
  document.querySelector('.contactsection').style.position = 'absolute';
  document.querySelector('.add-block').style.position = 'relative';
  document.querySelector('.add-block').style.visibility = 'visible';
  document.querySelectorAll('header a').forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');
});
getContact.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.list-block').style.visibility = 'hidden';
  document.querySelector('.list-block').style.position = 'absolute';
  document.querySelector('.add-block').style.visibility = 'hidden';
  document.querySelector('.add-block').style.position = 'absolute';
  document.querySelector('.contactsection').style.position = 'relative';
  document.querySelector('.contactsection').style.visibility = 'visible';
  document.querySelectorAll('header a').forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');
});

const currentDate = DateTime.local().toLocaleString(DateTime.DATE_FULL);
const currentTime = DateTime.local().toLocaleString(DateTime.TIME_24_WITH_SECONDS);
const currentDateTime = `${currentDate} ${currentTime}`;
const date = document.createElement('li');
date.classList.add('date');
date.innerText = currentDateTime;
document.querySelector('main').insertBefore(date, document.querySelector('main').firstChild);
