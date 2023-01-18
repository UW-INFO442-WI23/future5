import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';

const checkCharacterInString = (givenString) => {
    let total = 0
    let charObject = {}
    for (let char in givenString){
        if (!char in charObject) {
        
        }
    }
    return total
}

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