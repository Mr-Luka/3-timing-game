import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1}/>
        <TimerChallenge title='Not so Easy' targetTime={5}/>
        <TimerChallenge title='Medium' targetTime={10}/>
        <TimerChallenge title='Hard' targetTime={15}/>
        <TimerChallenge title='Oh boy...' targetTime={23}/>
      </div>
    </>
  );
}

export default App;
