import {useState, useRef} from 'react';

import ResultModal from './ResultModal.jsx';


export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const [startTimer, setStartTimer] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);


    function handleStart(){
        timer.current = setTimeout(()=> {
            setTimerExpired(true);
        }, targetTime * 1000);
        setStartTimer(true)
    }

    function stopTimer(){
        clearTimeout(timer.current);
    }



    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result='lost'/> }
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={startTimer ? stopTimer : handleStart}>
                        {startTimer ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={startTimer ? 'active' : undefined}>
                    {startTimer ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}




