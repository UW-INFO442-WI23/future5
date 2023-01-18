import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';

const HomePage = () => {
    let array = [0, 5, 7, 9, 10]
    let total = 0
    array.forEach(element => {
        total += element
    })
    let element = <h1>The total is {total}</h1>
    return element
    
}

export default HomePage