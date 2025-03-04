import {useState, useRef} from 'react';

import ResultModal from './ResultModal.jsx';


export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const dialog = useRef()
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

    const activeTime = remainingTime > 0 && remainingTime < targetTime * 1000;

    if(remainingTime <= 0) {
        clearInterval(timer.current);
        setRemainingTime(targetTime * 1000);
        dialog.current.showModal();
    }


    function handleStart(){
        timer.current = setInterval(()=> {
            setRemainingTime(prevTime => prevTime - 10)
        }, 10);

    }

    function stopTimer(){
        dialog.current.showModal();
        clearInterval(timer.current);
    }



    return (
        <>
            <ResultModal 
                targetTime={targetTime} 
                result='lost' ref={dialog}
                timeRemaining = {remainingTime}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={activeTime ? stopTimer : handleStart}>
                        {activeTime ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={activeTime ? 'active' : undefined}>
                    {activeTime ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}




