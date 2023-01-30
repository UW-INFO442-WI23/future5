import React from 'react';
import ReactDOM from 'react-dom/client';

const checkCharacterInString = (givenString: string) => {
    let total: number = 0
    let charObject: Object = {}
    
    for (var char = 0; char < givenString.length; char++){
        total++        
    }
    
    return total
}

const HomePage: React.FC = () => {
    let array = [0, 5, 7, 9, 10]
    let total = 0
    array.forEach(element => {
        total += element
    })
    return (
        <h1>The total is {total}</h1>
    )
    
}

export default HomePage