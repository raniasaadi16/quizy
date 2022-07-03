import React, { useEffect, useState } from 'react'
import Shuffle from '../../../../utils/Shuffle';
import Result from '../../../../components/Result';

export default function Questions({questions}) {
    const [count, setcount] = useState(0);
    const [question, setquestion] = useState(questions[0]);
    const [choices, setchoices] = useState(Shuffle([question.correct_answer, ...question.incorrect_answers]));
    const [done, setdone] = useState(false);
    const [countCorrect, setcountCorrect] = useState(0); 
    const [disableChoices, setdisableChoices] = useState(false); 
    const [userChoice, setuserChoice] = useState(''); 
    const [answerColor, setanswerColor] = useState('');

    const checkAnswer = (choice, i) => {
        setdisableChoices(true)
        setuserChoice(i)
        if(choice === question.correct_answer){
            setcountCorrect(prev => prev + 1)
            setanswerColor('btn-correct')            
        }else{
            setanswerColor('btn-error')
        }
    }
    useEffect(() => {
        if(count === questions.length) setdone(true)
        if(count < questions.length){
            setdisableChoices(false)
            setquestion(questions[count])
        }
    }, [count]);
 
    useEffect(() => {
        setanswerColor('')
        setchoices(Shuffle([question.correct_answer, ...question.incorrect_answers]))
    }, [question]);
  

  return (
    <div>
        {!done ? (
            <div>
                <h1 className='title'>{question.question}</h1>
                {choices.map((choice, i) => (
                    <button key={i}  onClick={(e) => checkAnswer(choice, i)} className={`btn ${i === userChoice && answerColor}`}  disabled={disableChoices}>{choice}</button>
                ))}
                <button onClick={() => setcount(prev => prev + 1)} className='bg-yellow-500 text-white px-5 py-2 rounded-lg block ml-auto'>next</button>
            </div>
        ) : (
            <Result questionsLength={questions.length} countCorrect={countCorrect} />
        )}
    </div>
  )
}

export async function getServerSideProps(ctx){
    let { category, amount, difficulty } = ctx.params
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple&difficulty=${difficulty === "any" ? '' : difficulty}`
    const res = await fetch(url, {
        method: 'GET'
    })
    const questions = await res.json()
    return{
        props: {
            questions: questions.results
        }
    }
}