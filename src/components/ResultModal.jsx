import {useRef, useImperativeHandle} from 'react';

export default function ResultModal ({targetTime, ref, onReset}){
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })

    return (
        <dialog className='result-modal' ref={dialog}>

            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>XX seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}

