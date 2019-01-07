import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles.css";
import Counter from "./Counter";

const initialState = {
  // Initian state of Redux state
  count: 12
};
function reducer(state = initialState, action) {
  // action will dispatch with the action type and payload (new values)
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

// Redux store need to create with the reducer, this store is the redux store
const store = createStore(reducer);
/* store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" }); */
// Provide from react-redux will connect the redux data to the store
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
