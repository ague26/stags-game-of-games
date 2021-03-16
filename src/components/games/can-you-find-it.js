import React, { useEffect,useState } from 'react';
import firebase from "firebase/app";
import 'firebase/database';
import { Animated } from 'react-animated-css';

function Cyfi(){
  const database = firebase.database();
  const [ question, setQuestion ] = useState("");
  const [ answer,setanswer ] = useState("");
  const [ revealAnswer, setrevealAnswer ] = useState(false);
  const [ usedQ, setusedQ] = useState([]);
  const [ randomInt, setrandomInt ] = useState("");
  const [ listQ, setlistQ ] = useState(null);
  const revealButton = () => setrevealAnswer(true);
  const getRandomNumber = async()=>{
    let refQuestionsObject = database.ref(`games/cyfi/Questions`);
    const snapshotQuestionObject = await refQuestionsObject.once("value");
    let numChildren =  snapshotQuestionObject.numChildren();
    let randomNumber =  Math.floor(Math.random() * Math.floor(numChildren));
    if(listQ === null){
      null;
    } else {
      const index = listQ.indexOf(randomInt);
      if (index > -1) {
        listQ.splice(index, 1);
      }
      randomNumber = listQ[Math.floor(Math.random() * (listQ.length - 1))];
    }
    setrandomInt(randomNumber);
    return randomNumber;
  };
  const fetchData = async () => {
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
  let r = /\W+(?=[A-Z][a-z])/g;  
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
      <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
        <h1>Can You Find It?</h1>
      </Animated>
      <div id="question">
        <pre>{question.replaceAll(r, '$&\n')}</pre>
      </div>
      <div>
        <p id="answer">{(revealAnswer === true) ? answer : null}</p>
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
          <div id="buttons">
            <button onClick={revealButton}>Reveal Answer</button>
            <button onClick={nextQuestion}>Next Question</button>
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default Cyfi;