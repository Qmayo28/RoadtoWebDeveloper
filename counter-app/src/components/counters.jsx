import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 1 },
  //     { id: 2, value: 2 },
  //     { id: 3, value: 3 },
  //     { id: 4, value: 4 },
  //   ],
  // };
  render() {
    //Object Destruction methods
    const { onReset, onDelete, onIncrement, counters } = this.props;
    console.log('Counters-Rendered');
    return (
      <React.Fragment>
        <div>
          <button onClick={onReset} className="btn btn-primary btn-small m-2">
            Reset
          </button>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
              // value={counter.value}
              // id={counter.id}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }

  // handleIncrement = (counter) => {
  //   console.log(counter);
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   console.log('RESET');
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  // handleDelete = (counterId) => {
  //   console.log('Event Handler Called');
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };
}
export default Counters;
