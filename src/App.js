import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./Counter";

import { counterReducer } from "./reducers";

// create store with reducers
let store = createStore(counterReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
