

export default function ResultModal (){


    return (
        <dialog className='result-modal' >
            <h2>You Lost!</h2>
            
            <p>The target time was <strong>XX seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}



