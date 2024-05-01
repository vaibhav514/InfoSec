import React, { useEffect, useRef, useState } from "react";
import BreadCrumps from "../components/BreadCrumps";
import { data } from "../data";
import "../quizzes.css";

const Quizzes = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult]= useState(false);
  let [qIndex, setQIndex] = useState(0);
  let [prevInd, setPrevInd] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => Math.max(0, prevTimeLeft - 1));
    }, 1000);
    
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (timeLeft<=15){
      document.querySelector('.timer').classList.add('warning');
    }

    if (timeLeft === 0) {
      console.log("Time Over");
      setResult(true);
    }
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(180);
    document.querySelector('.timer').classList.remove('warning');
  };

  const totalQues = 10;

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock===false){
      if(question.ans===ans){
        e.target.classList.add("correct");
        setScore(prev=>prev+1);
      }
      else{
        e.target.classList.add("wrong");
        option_array[question.ans-1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock===true){
      setQIndex(++qIndex);
      if (index===totalQues-1){
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[qIndex]);
      setLock(false);
      console.log(timeLeft);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }

  const reset = ()=>{
    setIndex(0);
    setQIndex(prevInd);
    setLock(false);
    setQuestion(data[prevInd]);
    setResult(false);
    setScore(0);
    resetTimer();
  }

  const change = ()=>{
    setIndex(0);
    setPrevInd(qIndex+1);
    setQIndex(qIndex+1);
    setLock(false);
    setQuestion(data[qIndex+1]);
    setResult(false);
    setScore(0);
    resetTimer();
  }

  return <div className="QSection">
    <BreadCrumps page="Quiz" title="Quiz" />
    <div className="container">
    <div className="quizbox">
      <h1>Cyber Quiz</h1>
      <div class="timer">Time Left: <span id="countdown">{timeLeft}</span> seconds</div>
      <hr/>
      {result?<>
        <h2>You Scored {score} out of 10</h2>
        <hr/>
        <button onClick={reset}> Repeat </button>
        <hr/>
        <button onClick={change}> New </button></>:<>
      <h2>{index+1}. {question.question}</h2>
      <hr/>
      <ul>
        <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{index+1} out of 10 questions</div></>}

    </div>
    </div>
  </div>;
};

export default Quizzes;
