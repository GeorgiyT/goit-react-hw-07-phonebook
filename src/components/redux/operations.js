import axios from "axios";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError
} from "./action";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    axios.get("/contacts").then(({ data }) => dispatch(fetchContactSuccess(data)));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    axios.post("/contacts", contact).then(({ data }) => dispatch(addContactSuccess(data)));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    axios.delete(`/contacts/${id}`).then(() => dispatch(deleteContactSuccess(id)));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export default { fetchContact, addContact, deleteContact };
