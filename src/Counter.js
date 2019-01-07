import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <p>
          <button onClick={this.decrement}> - </button>
          Counter <span>{this.props.count}</span>
          <button onClick={this.increment}> + </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});
export default connect(mapStateToProps)(Counter);
