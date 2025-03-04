import {forwardRef, useRef, useImperativeHandle} from 'react';

const ResultModal = forwardRef( function ResultModal ({timeRemaining, targetTime,}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, ()=> {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })

    const userLost = timeRemaining <= 0;
    const formattedTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.round(timeRemaining / (targetTime * 1000) * 100);



    return (
        <dialog ref={dialog} className='result-modal'>
            {userLost && <h2>You Lost!</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedTime} seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;