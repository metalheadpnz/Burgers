import React from 'react'
import {render} from 'react-dom';
import Landing from "./components/Landing";
import './css/style.css';
import App from "./components/App";
import Router from "./components/Router";

// render (<Landing/> , document.querySelector('#root'))
render (<Router/> , document.querySelector('#root'))
