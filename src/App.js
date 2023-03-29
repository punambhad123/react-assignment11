import React, { useState, useRef  } from "react";
//import "./style.css";

export default function App() {
  const points = useRef(0)
  const [greeting , setGreeting] = useState("")
  const [index , setIndex] = useState(0)
  const arr = [
    {
      id: 1,
      Question:
        "Which Bollywood actor was honoured with the 24th Crystal Award at the World Economic Forum meeting in January 2018?",
      Options: [
        { Option: "Shahrukh Khan", isCorrect: true },
        { Option: "Aamir Khan", isCorrect: false },
        { Option: "Salman Khan", isCorrect: false },
        { Option: "Saif Ali Khan", isCorrect: false },
      ],
    },
    {
      id: 2,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2022?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 3,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2021?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 4,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2020?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 5,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2019?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 6,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2018?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 7,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2017?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 8,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2016?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 9,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2015?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },
    {
      id: 10,
      Question:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2014?",
      Options: [
        { Option: "Rajkummar Rao", isCorrect: false },
        { Option: "Manoj Bajpayee", isCorrect: false },
        { Option: "Pankaj Tripathi", isCorrect: true },
        { Option: "Nawazuddin Siddiqui", isCorrect: false },
      ],
    },

  ];

  function handleClick(o) {
   console.log(o,"iddenti")
   if(o.isCorrect === true){
     points.current = points.current  + 1 
    }
    if(points.current == 4){
      console.log("winner")
      setGreeting("You have scored 4 and you are pass")
    }
    console.log(points.current)
  }

  function handleNext(){
    setIndex(index+1)
  }

  return (
    <div>
      {greeting === "" ?
      
        <div >
          <p>{arr[index].Question}</p>
          {arr[index].Options.map((o, index) => (
            <div >
               <input
                  type="radio"
                  name = "opt"
                  id={o.Option}
                  onClick={()=>handleClick(o)}
                />
              <label htmlFor={o.Option}  onClick={()=>handleClick(o)}>
                {o.Option}
              </label>
             
            </div>
          ))}
        </div>
      
      : <p>{greeting}</p>
      }

      {index === 10 ? 
      <button>Submit</button>
      :
      <button onClick={handleNext}>Next</button>
}
    </div>
  );
}
