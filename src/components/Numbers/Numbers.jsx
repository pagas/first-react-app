// Dependencies
import React, { Component } from 'react';
import shortid from 'shortid';


// Components
import ResultPure from './ResultPure';
// import Result from './Result';

// Styles
import './Numbers.css';

class Numbers extends Component {
    state = {
      numbers: '', // Here we will save the input value
      results: [] // In this state we will save the results of the sums
    };

    componentDidUpdate() {
      console.log('Number comp udpate');
    }

    handleNumberChange = e => {
      const { target: { value } } = e;

      // Converting the string value to array
      // "12345" => ["1", "2", "3", "4", "5"]
      const numbers = Array.from(value);

      // Summing all numbers from the array
      // ["1", "2", "3", "4", "5"] => 15
      const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);
      const { results } = this.state;
      // Updating the local state
      this.setState({
        numbers: value,
        results: [...results, result]
      });
    }

    render() {
      const { numbers, results } = this.state;
      return (
        <div className="Numbers">
          <input
            type="number"
            value={numbers}
            onChange={this.handleNumberChange}
          />

          {/* /!* Rendering the results array *!/ */}
          {/* <h1>Result: </h1> */}
          {/* <ul> */}
          {/* {this.state.results.map((result, i) => ( */}
          {/* <Result key={i} result={result} /> */}
          {/* ))} */}
          {/* </ul> */}


          {/* Rendering the results array */}
          <h1>PureResult: </h1>
          <ul>
            {results.map((result) => (
              <ResultPure key={shortid.generate()} result={result} />
            ))}
          </ul>
        </div>
      );
    }
}

export default Numbers;
