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
    function randomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const [question, setQuestion] = useState("");
    useEffect(()=>{
        let ref= database.ref(`games/cyfi/Questions/${randomInt(2)}`)
        ref.on("value", snapshot => {
            setQuestion(snapshot.val())  
         }, error => {
            console.log("Error: " + error.code);
        });
    },[])
    return(
        <div>
            
            <h1>Can You Find It Game</h1>
            <div>
            <p>{question}</p>
            </div>
        
        </div>
        
    )
    

}

export default Cyfi;