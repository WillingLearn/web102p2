import React from 'react'
import './card.css'
import { useState } from 'react';


const Card = () => {
    const [count, setCount] = useState(0);
    const updateCount = () => 
        {setCount(count + 1); 
        setIsFlipped(false);};
    const truth=true;
    const show=() => {!(truth)};
    const [isFlipped, setIsFlipped] = useState(false);
    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
      };
    const minus = () => {
        setCount(count-1);
        if (count===5)
            setCount(count-5);
        if (count ===-1) {
            setCount(count+5);
        }
        setIsFlipped(false);
    }



    const dict=[
        {question:"how many legs does an Octopus have?", answer:"8"},
        {question:"how many legs does an Horse have?", answer:"4"},
        {question:"how many legs does a Human have?", answer:"2"},
        {question:"how many legs does an 3 legged stool have?", answer:"3"},
        {question:"how many legs does an Insect have?", answer:"6"},

    ]




  return (
  <div>
    <h1>Legs Trivia</h1>
    <h2>Total cards: {dict.length}</h2>
    {/* <div className='index' onClick={toggleFlip}>{truth?dict[count].question:dict[count.answer]}</div> */}
    <div className='index' onClick={toggleFlip}>{!isFlipped?dict[count].question:dict[count].answer}</div>
    <a href="#" className="previous round" onClick={minus}>&#8249;</a>
    <a href="#" className="next round" onClick={updateCount}>&#8250;</a>
  </div>)
}

export default Card