import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import RouteComponent from "./RouteComponent";
import {BrowserRouter  } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <RouteComponent />
    </BrowserRouter>,
    document.getElementById('root')
);