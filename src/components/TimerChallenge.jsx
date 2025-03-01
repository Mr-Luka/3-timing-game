import {useState, useRef} from 'react';


export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(()=> {
            setTimerExpired(true); // its inside here because once this function gets executed, timer expired, and sets it to true

        }, targetTime * 1000);
        setTimerStarted(true); // this will execute at the same time as setInterval, however it will be instant, while interval will wait for 1 second or more to be executed
    }

    function handleStop(){ //stops timer
        clearTimeout(timer.current)
    }



    return (
        <>
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You Lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart} >
                        {timerStarted ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    Time is {timerStarted ? 'running...' : 'still'}
                </p>
            </section>
        </>
    )
}




