import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  filterContacts,
} from '../actions/phonebookActions';

const onAddContact = (state, { type, payload }) => [...state, payload];
const onRemoveContact = (state, { type, payload }) =>
  state.filter(item => item.id !== payload);

const items = createReducer([], {
  [addContact]: onAddContact,
  [removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [filterContacts]: (state, { type, payload }) => payload,
});

export default combineReducers({ items, filter });

//______________________________________________________________________________
// import { ADDCONTACT, FILTERCONTACTS, REMOVECONTACT } from '../types/types';

// // c combineReducers без toolkit

// const items = (state = [], action) => {
//   switch (action.type) {
//     case ADDCONTACT:
//       return [...state, action.payload];
//     case REMOVECONTACT:
//       return state.filter(item => item.id !== action.payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = '', action) => {
//   switch (action.type) {
//     case FILTERCONTACTS:
//       return action.payload;
//     default:
//       return state;
//   }
// };
// export default combineReducers({ items, filter });

//______________________________________________________________________________
// // было до combineReducers

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const phonebookReducer = (state = { ...initialState }, action) => {
//   switch (action.type) {
//     case ADDCONTACT:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     case REMOVECONTACT:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(
//             item => item.id !== action.payload,
//           ),
//         },
//       };
//     case FILTERCONTACTS:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filter: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// export default phonebookReducer;
