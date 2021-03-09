import React, { useEffect,useState } from 'react';
import firebase from "firebase/app";
import 'firebase/database';

function Cyfi(){
  const database = firebase.database();

  const [ question, setQuestion ] = useState("");
  const [ answer,setanswer ] = useState("");
  const [ revealAnswer, setrevealAnswer ] = useState(false);
  const [ usedQ, setusedQ] = useState([]);
  const [ randomInt, setrandomInt ] = useState("");
  const [ listQ, setlistQ ] = useState(null);

  const revealButton=() => {
    setrevealAnswer(true);
  };
  const getRandomNumber = async()=>{
    let refQuestionsObject = database.ref(`games/cyfi/Questions`);
    const snapshotQuestionObject = await refQuestionsObject.once("value");
    let numChildren =  snapshotQuestionObject.numChildren();
    let randomNumber =  Math.floor(Math.random() * Math.floor(numChildren));
    if(listQ === null){
      null;
    }else{
      const index = listQ.indexOf(randomInt);
      if (index > -1) {
        listQ.splice(index, 1);
      }
      randomNumber = listQ[Math.floor(Math.random() * (listQ.length - 1))];
    }
    setrandomInt(randomNumber);
    return randomNumber;
  };
  const fetchData = async()=>{
    const randomNumber = await getRandomNumber(); 
    setrandomInt(randomNumber);
    let pushtoArray =  usedQ.concat(randomNumber);
    let arrayObject = (new Set(pushtoArray));
    let array = (Array.from(arrayObject));
    setusedQ(array);
    console.log(listQ);
    let refQuestions = database.ref(`games/cyfi/Questions/${randomNumber}`);
    const snapshotrefQuestions = await refQuestions.once("value");
    let user = (snapshotrefQuestions.val());
    setQuestion(user);

    let refAnswers = database.ref(`games/cyfi/Answers/${randomNumber}`);
    const snapshotrefAnswers = await refAnswers.once("value");
    let answer = (snapshotrefAnswers.val());
    setanswer(answer);
  };
  const nextQuestion = async()=>{
    let random = await getRandomNumber();

    let refQuestions = database.ref(`games/cyfi/Questions/${random}`);
    const snapshotrefQuestions = await refQuestions.once("value");
    let user = (snapshotrefQuestions.val());
    setQuestion(user);

    let refAnswers = database.ref(`games/cyfi/Answers/${random}`);
    const snapshotrefAnswers = await refAnswers.once("value");
    let answer = (snapshotrefAnswers.val());
    setanswer(answer);

    setrevealAnswer(false);
   
    if (listQ.length === 0) {
      alert("I hope you liked the game :)");
    }
  };
  useEffect(async() => {
    let refQuestionsObject = database.ref(`games/cyfi/Questions`);
    const snapshotQuestionObject = await refQuestionsObject.once("value");
    let numChildren =  snapshotQuestionObject.numChildren();
    let len = numChildren;
    let arr = new Array(len);
    for (let i=0; i<len; i++) {
      arr[i] = 0 + i;
    }
    setlistQ(arr);
    fetchData();
  },[]);
  return (
    <div>
      <h1>Can You Find It Game</h1>
      <div>
        <p>{question}</p>
      </div>
      <p>create another function for the post render state. The pre render function are used once on load. Do not try and waste time and figuring the dependency. It wont work b/c getrandom fucntion will reset the number of total children it has.  </p>
      <div>
        <button onClick={revealButton}>Reveal Answer</button>
        { ( revealAnswer === true ) ? answer : null }
      </div>
      <div>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default Cyfi;