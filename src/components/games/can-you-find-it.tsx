import React, { useState, useEffect } from 'react';

function Cyfi() {
  
  const [QA, setQA] = useState([
    {
      "question": "Although this thing has a spine It doesn’t have a face Although it is not clothing It gets stored in a case",
      "answer": "Books"
    },
    {
      "question": "Sometimes to get inside a door All you need to do is knock Other times you will need this thing So the door you can unlock",
      "answer": "Keys"
    },
    {
      "question": "This is something on a roll But it’s not a plane about to fly It is found in a bathroom And comes in single or double-ply",
      "answer": "Toilet"
    },
    {
      "question": "I get filled with water But I’m not a shower It’s in me you would put A beautiful flower",
      "answer": "Vase"
    },
    {
      "question": "It might be worth wearing an apron To keep your clothes nice and smart So your brush doesn’t splash this on you When making a piece of art",
      "answer": "Paint"
    },
    {
      "question": "If you dropped this on your foot You would find it really hurts It’s usually heated up And is used to flatten shirts",
      "answer": "Iron"
    },
    {
      "question": "I’m a piece of silverware Although I am not a fork But if I’m combined with one Then you end up with a spork",
      "answer": "Spoon"
    },
    {
      "question": "I’m something that is often round But I’m not a pizza base I have hands but don’t have fingers And have numbers on my face",
      "answer": "Clock"
    },
    {
      "question": "If you walk in a living room You might see a coffee table You will also see this item You can turn on and watch cable",
      "answer": "Television"
    },
    {
      "question": "When you need to wash your hair Just using water’s not enough Instead you would use this thing That might help to prevent dandruff",
      "answer": "Shampoo"
    },
    {
      "question": "If your hands get really messy And dirt is all that can be seen Then use some of this with water To help make sure your hands get clean",
      "answer": "Soap"
    },
    {
      "question": "I’m something in your bedroom You can find inside a case I’m used by you every night As it’s where you rest your face",
      "answer": "Pillow"
    },
    {
      "question": "In the morning and at night A tube of this should be squeezed So that your teeth can be cleaned And help keep your parents pleased",
      "answer": "Toothpaste"
    },
    {
      "question": "I am something which is used When you’re wrapping up someone’s gift Because I am adhesive It means the paper doesn’t shift",
      "answer": "Sticky Tape"
    },
    {
      "question": "Because this item is sharp You shouldn’t give it a lickin’ You use it to cut up food And sometimes to carve a chicken",
      "answer": "Knife"
    },
    {
      "question": "If you have one of these Then dry you will remain Hold it above your head It will keep off the rain",
      "answer": "Umbrella"
    },
    {
      "question": "These things don’t get sticky Even though they’re used with paste They get used twice a day And gives mouths a minty taste",
      "answer": "Toothbrush"
    },
    {
      "question": "I do not get put on a bed Even though I am a sheet Instead put me in a binder To keep your desk nice and neat",
      "answer": "Paper"
    },
    {
      "question": "I am often long and thin And get held inside a stick My outside is made of wax And inside there is a wick",
      "answer": "Candle"
    },
    {
      "question": "Some are used for fabric And some are used for hair Some are used for paper And one is called a pair",
      "answer": "Scissors"
    }

  ]);

  const [questionAnswer, setQuestionAnswer] = useState<{ [key: string]: any }>({});
  const [revealAns, setAnswer] = useState(false);
  const randomQ = () => {
    const randomInt = Math.floor(Math.random() * QA.length);
    if (QA.length === 0) {
      setQuestionAnswer({ "question": "You have completed all questions. Hope you had fun!" });
    } else {
      setQuestionAnswer(QA[randomInt]);
      QA.splice(randomInt, 1);
      setQA([...QA]);
    }
  };

  const nextQuestion = () => {
    randomQ();
    setAnswer(false);
  };
  const revealButton = () => {
    if (revealAns) {
      return questionAnswer["answer"];
    } else {
      return;
    }
  };
  useEffect(() => {
    randomQ();
  }, []);
  return (
    <div>
      <h1>Can You Find Its?</h1>
      <div id="question">
        <div>{questionAnswer.question}</div>
        {/* <pre>{replaceAll(question, r)}</pre> */}
      </div>
      <div>
        <p id="answer">{revealButton()}</p>
        <div id="buttons">
          <button onClick={()=>setAnswer(true)}>Reveal Answer</button>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default Cyfi;