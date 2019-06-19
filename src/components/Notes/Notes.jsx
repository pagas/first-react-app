import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Notes.css';
import shortid from 'shortid';

const formatTime = 'YYYY-MM-DD HH:mm:ss';

class Notes extends Component {
    static propTypes = {
      notes: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    constructor() {
      super();

      // We save the first date when the data is
      // rendered at the beginning
      this.state = {
        lastUpdate: moment().format(formatTime).toString()
      };
    }


    componentWillReceiveProps(nextProps) {
      const { notes } = this.props;
      // If the prop notes has changed...
      if (nextProps.notes !== notes) {
        this.setState({
          lastUpdate: moment().format(formatTime).toString()
        });
      }
    }

    componentWillUnmount() {
      console.log('Hasta la vista baby!');
      document.body.style = 'background: black;';
      document.getElementById('unmountMessage').style.color = 'white';
    }

    render() {
      const { notes } = this.props;
      const { lastUpdate } = this.state;
      return (
        <div className="Notes">
          <h1>Notes:</h1>

          <ul>
            {notes.map((note) => (
              <li key={shortid.generate()}>
                {note.title}
                {' '}
-
                {' '}
                {note.content}
              </li>
            ))}
          </ul>

          <p>
Last Update:
            <strong>{lastUpdate}</strong>
          </p>
        </div>
      );
    }
}

export default Notes;
