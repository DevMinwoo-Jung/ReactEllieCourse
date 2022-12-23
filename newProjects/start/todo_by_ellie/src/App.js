import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoLst from './components/TodoList/TodoLst';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  // 참조가 같다면 useState의 set도 생략 가능 onFilterChange={filter => setFilter(filter)} => setFilter
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoLst filter={filter}/>
    </div>
  );
}

export default App;
