import React from "react";
import Counter from "./counter";
import { Component } from "react";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; // Destructuring

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <br></br>
        {counters.map((counter) => (
          <React.Fragment>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            />
            <br></br>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Counters;
