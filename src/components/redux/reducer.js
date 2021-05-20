import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addFilter
} from "./action";

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, action) => action.payload,

  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) => state.filter(el => el.id !== action.payload)
});

const isRequested = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false
});

const filter = createReducer("", {
  [addFilter]: (_, action) => action.payload
});

const error = createReducer("", {
  [fetchContactError]: (_, action) => action.payload,
  [addContactError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload
});

export default combineReducers({
  contacts,
  isRequested,
  filter,
  error
});

//Error записал, в принципе есть он есть мы можем его выводить в соответсвующем компоненте.. но уже 02:42.... оставлю до лучших времен
