import React, { useEffect,useState } from 'react';
import firebase from "firebase/app";
import 'firebase/database';

function Cyfi(){
    const database = firebase.database()
    // var ref = database.ref(`games/cyfi/Questions/0`);
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val());
    //  }, function (error) {
    //     console.log("Error: " + error.code);
    // });
    function randomInt() {
        let max = 2;
        setrandomNumber(Math.floor(Math.random() * Math.floor(max)));
    }
    const revealButton = () =>{
        setrevealAnswer(true)
    }
    const [question, setQuestion] = useState("");
    const [revealAnswer, setrevealAnswer] = useState(false)
    const [answer,setanswer] = useState("")
    const [randomnumber, setrandomNumber]= useState("")
    useEffect(()=>{
        randomInt()
        let refQuestions= database.ref(`games/cyfi/Questions/${randomnumber}`)
        let refAnswers= database.ref(`games/cyfi/Answers/${randomnumber}`)
        refQuestions.on("value", snapshot => {
            setQuestion(snapshot.val())  
         }, error => {
            console.log("Error: " + error.code);
        });
        refAnswers.on("value", snapshot => {
            setanswer(snapshot.val())  
         }, error => {
            console.log("Error: " + error.code);
        });
    },)
    // useEffect(()=>{
    //     let ref= database.ref(`games/cyfi/Questions/${randomInt(2)}`)
    //     ref.on("value", snapshot => {
    //         setQuestion(snapshot.val())  
    //      }, error => {
    //         console.log("Error: " + error.code);
    //     });
    // },[])
    return(
        <div>
            
            <h1>Can You Find It Game</h1>
            <div>
                <p>{question}</p>
            </div>
            <div>
                <button onClick={revealButton}>Reveal Answer</button>
                {
                    (revealAnswer === true)?
                        answer
                        :
                        null
                    
                }
            </div>
        
        </div>
        
    )
    

}

export default Cyfi;