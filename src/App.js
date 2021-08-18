import "./App.css";
import MainVideo from './components/MainVideo';
import SuggestionVideos from './components/SuggestionVideos';

function App() {
  

 
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <MainVideo/>
        <SuggestionVideos/>
      </div>
    </div>
  );
}

export default App;
