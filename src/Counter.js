import React from "react";

import { connect } from "react-redux";

import { add, min } from "./actions";

class Counter extends React.Component {
  minus() {
    this.props.dispatch(min());
  }

  add() {
    this.props.dispatch(add());
  }

  render() {
    return (
      <div>
        <h1>Compteur</h1>
        <button onClick={() => this.minus()}>-</button>
        <span style={{ margin: "0 20px" }}>{this.props.count}</span>
        <button onClick={() => this.add()}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
