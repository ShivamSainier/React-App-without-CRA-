import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";

const root=document.getElementById('root');
const DOM=ReactDOM.createRoot(root);
const element=React.createElement("h1",{},"hello World!");
DOM.render(<App />);