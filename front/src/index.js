import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import initState from "./redux/initState";
import BarterProvider from "./context/barterContext";
import { setUser } from "./redux/actions/userAC";
import { setTags } from "./redux/actions/tagsAC";
import { setDeals } from "./redux/actions/dealsAC";

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);
const user = JSON.parse(window.localStorage.getItem("user"));
if (user) {
  fetch(`http://localhost:4000/user/${user.id}`)
    .then((res) => res.json())
    .then(({user,tags,deals}) => {
      store.dispatch(setUser(user));
      store.dispatch(setTags(tags));
      store.dispatch(setDeals(deals));
    });

}

ReactDOM.render(
  <React.StrictMode>
    <BarterProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </BarterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
