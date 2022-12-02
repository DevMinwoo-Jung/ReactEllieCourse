import './App.css';

function App() {
  const list = ['망고', '빙수', '비싸'];
  return (
    <div className="App">
      {
        list.map((item) => (
          <li>{item}</li>
        ))
      }     
      {
        list.map((item) => {
          return <li>{item}</li>
        })
      }   
    </div>
  );
}

export default App;
