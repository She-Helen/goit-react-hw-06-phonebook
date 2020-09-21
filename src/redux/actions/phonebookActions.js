import { createAction } from '@reduxjs/toolkit';

// // стало с toolkit
const addContact = createAction('@phonebook/addContact');
const removeContact = createAction('@phonebook/removeContact');
const filterContacts = createAction('@phonebook/filterContacts');

export { addContact, removeContact, filterContacts };

// // было до toolkit
// import { ADDCONTACT, FILTERCONTACTS, REMOVECONTACT } from '../types/types';

// const addContact = item => {
//   return {
//     type: ADDCONTACT,
//     payload: item,
//   };
// };

// const removeContact = id => {
//   return {
//     type: REMOVECONTACT,
//     payload: id,
//   };
// };
// const filterContacts = value => {
//   return {
//     type: FILTERCONTACTS,
//     payload: value,
//   };
// };
