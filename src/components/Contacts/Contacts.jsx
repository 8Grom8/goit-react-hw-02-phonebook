import { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import List from "./ContactList/ContactList";

class Todos extends Component {
  state = {
    items: [],
    filter: "",
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.state.items.some((item) => item.name === term.name);
    if (isDuplicate) {
      alert("Contact " + term.name);
      return;
    }

    const newTodo = {
      id: uuid(),
      name: term.name,
      number: term.number,
    };

    this.setState((prevState) => {
      const newItems = [newTodo, ...prevState.items];
      return { items: newItems };
    });
  };

  render() {
    const { items, filter } = this.state;
    const formattedFilter = filter.toLowerCase().trim();
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(formattedFilter)
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <List items={filteredItems} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Todos;
