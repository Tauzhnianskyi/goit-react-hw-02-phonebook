import { ContactForm } from './Form/ContactForm';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, phone) => {
    console.log(name, phone);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSumbmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList items={this.state.contacts} />
      </div>
    );
  }
}
