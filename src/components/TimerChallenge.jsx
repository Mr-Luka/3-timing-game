import {useState, useRef} from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({targetTime, title}){
    const timer = useRef();
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);


    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart(){
        timer.current = setInterval(()=> {
            setTimeRemaining(prevTime => prevTime - 10)
        }, 10)
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal 
                ref={dialog} 
                targetTime={targetTime} 
                timeRemaining={timeRemaining}
                onReset={handleReset}    
                />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={timerActive ? handleStop : handleStart}>
                        {timerActive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    {timerActive ? 'Time is running...' : 'Timer is inactive'}
                </p>
            </section>
        </>
    )
}




