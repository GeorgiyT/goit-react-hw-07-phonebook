import React from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <>
        <h2 className={styles.headers}>Phonebook</h2>
        <ContactForm />
        <h2 className={styles.headers}>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
