import {useState, useRef} from 'react';


export default function TimerChallenge({title, targetTime}){
    let timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart(){
        timer.current = setTimeout(()=> {
            setTimerExpired(true);
        }, 1000);
        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current)
    }

    return (
        <>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running...' : 'Timer is inactive.'}
                </p>
            </section>
        </>
    )
}




