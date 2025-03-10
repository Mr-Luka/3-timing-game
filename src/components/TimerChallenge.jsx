import {useState, useRef} from 'react';



export default function TimerChallenge({title, targetTime}){
    const time = useRef();
    const [timeExpired, setTimeExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    
    function handleStart(){
        time.current = setTimeout(()=> {
            setTimeExpired(true);
        }, targetTime * 1000)
        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(time.current);
    }
 
    return (
        <>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    1 second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                       {timerStarted ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    { timerStarted ? 'Time is running...' : 'Timer is inactive.'}
                </p>
            </section>
        </>
    )
}




