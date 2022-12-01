import './css/App.css'
import Quote from './layout/quote/quote';
import Main from './layout/main/main';
import Youtube from './layout/youtube/youtube';

function App(props) {
  return (
    <div className="App">
      <Quote />
      <Main />
      <Youtube />
    </div>
  );
}

export default App;
