import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";


class AddForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    id : uuid(),
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
        
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ name: "", number: "" });

  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button type="submit" className="btnStyle">
          Add
        </button>
      </form>
    );
  }
}

export default AddForm;
