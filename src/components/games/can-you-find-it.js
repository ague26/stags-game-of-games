import React, { useEffect,useState } from 'react';
import firebase from "firebase/app";
import 'firebase/database';

function Cyfi(){
  const database = firebase.database();
    
  function revealButton() {
    setrevealAnswer(true);
  }
  const [ question, setQuestion ] = useState("");
  const [ revealAnswer, setrevealAnswer ] = useState(false);
  const [ answer,setanswer ] = useState("");

  useEffect(() => {
    const runDatabase = async()=>{
      let refQuestionsObject = database.ref(`games/cyfi/Questions`);
      const snapshotQuestionObject = await refQuestionsObject.once("value");
      let numChildren = snapshotQuestionObject.numChildren();
      let randomNumber =  Math.floor(Math.random() * Math.floor(numChildren));

      let refQuestions = database.ref(`games/cyfi/Questions/${randomNumber}`);
      const snapshotrefQuestions = await refQuestions.once("value");
      let user = (snapshotrefQuestions.val());
      console.log(user);
      setQuestion(user);

      let refAnswers = database.ref(`games/cyfi/Answers/${randomNumber}`);
      const snapshotrefAnswers = await refAnswers.once("value");
      let answer = (snapshotrefAnswers.val());
      setanswer(answer);
    };
    runDatabase();
  },[]);
  return (
    <div>
      <h1>Can You Find It Game</h1>
      <div>
        <p>{question}</p>
      </div>
      <div>
        <button onClick={revealButton}>Reveal Answer</button>
        { ( revealAnswer === true ) ? answer : null }
      </div>
    </div>
  );
}

export default Cyfi;