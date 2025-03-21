

import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChallenge targetTime={1} title='Easy' />
      <TimerChallenge targetTime={5} title='Not so Easy' />
      <TimerChallenge targetTime={10} title='Hard' />
      <TimerChallenge targetTime={15} title='Really Hard' />
      </div>
    </>
  );
}

export default App;
