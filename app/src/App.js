
import './App.css';
import Content from './components/Layouts/Content/Content';
import Header from './components/Layouts/Header/Header';
import Notes from './components/Notes/Notes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content>
     <Notes></Notes>
      </Content>
    </div>
  );
}

export default App;
