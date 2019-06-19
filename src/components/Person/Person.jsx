/* eslint no-console: "off" */
import React, { Component } from 'react';
import Popup from 'react-popup';
import './Person.css';

class Person extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      errors: {
        firstName: false,
        lastName: false
      }
    };
  }

    handleOnChange = e => {
      const { target: { value, name } } = e;

      this.setState({
        [name]: value
      });
    }

    handleOnSubmit = e => {
      // The e.preventDefault() method cancels the event if it is cancelable,
      // meaning that the default action that belongs to the event won't occur.
      e.preventDefault();

      const {
        firstName,
        lastName,
        email,
        phone
      } = this.state;

      // If firstName or lastName is missing we add an error class
      this.setState({
        errors: {
          firstName: firstName === '',
          lastName: lastName === ''
        }
      });

      if (firstName !== '' && lastName !== '' && email !== '') {
        Popup.create({
          title: 'Person Information',
          content: (
            <div>
              <p>
                <strong>Name:</strong>
                {' '}
                {firstName}
                {' '}
                {lastName}
              </p>
              <p>
                <strong>Email:</strong>
                {' '}
                {email}
              </p>
              {phone && (
              <p>
                <strong>Phone:</strong>
                {' '}
                {phone}
              </p>
              )}
            </div>
          ),
          buttons: {
            right: [{
              text: 'Close',
              action: popup => popup.close()
            }],
          },
        });
      }
    }

    render() {
      const {
        firstName, lastName, errors, email, phone
      } = this.state;
      return (
        <div className="Person">
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <p><strong>First Name:</strong></p>
              <div>
                <input
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={this.handleOnChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <div className="errorMessage">Required field</div>}
              </div>
            </div>

            <div>
              <p><strong>Last Name:</strong></p>
              <div>
                <input
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.handleOnChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <div className="errorMessage">Required field</div>}
              </div>
            </div>

            <div>
              <p><strong>Email:</strong></p>
              <p>
                <input name="email" type="email" value={email} onChange={this.handleOnChange} />
              </p>
            </div>

            <div>
              <p><strong>Phone:</strong></p>
              <p>
                <input name="phone" type="tel" value={phone} onChange={this.handleOnChange} />
              </p>
            </div>

            <p>
              <button type="button">Save Information</button>
            </p>
          </form>
        </div>
      );
    }
}

export default Person;
