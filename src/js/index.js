//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/SimpleCounter.jsx";


var counter = 0
setInterval(() => {
    ReactDOM.render(<Counter number={counter}/>, document.querySelector("#app"))
    counter++
}, 1000);

ReactDOM.render(<Counter number={counter}/>, document.querySelector("#app"));
