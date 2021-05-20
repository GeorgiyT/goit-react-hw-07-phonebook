import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import operations from "../redux/operations.js";

const ContactList = ({ contacts, isLoading, deleteContact }) => {
  return (
    <>
      {isLoading && <h2 className={styles.contactList__header}>Загружаем....</h2>}
      <ul className={styles.contactList}>
        {contacts.map(el => (
          <li key={el.id}>
            {el.name}: {el.number}
            <button type="button" name={el.id} onClick={() => deleteContact(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  isLoading: PropTypes.bool,
  deleteContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const getFilteredContacts = () => {
    const normalizedFilter = state.filter.toLowerCase();
    return state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return { contacts: getFilteredContacts(), isLoading: state.isRequested };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
