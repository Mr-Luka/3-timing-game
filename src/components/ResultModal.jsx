

export default function ResultModal (){

    return (
        <dialog className='result-modal'>

            <p>The target time was <strong>X seconds.</strong></p>
            <p>You stopped the timer with <strong>XX seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}

