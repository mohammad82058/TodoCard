import React from 'react';
import TodoCard from "./componets/TodoCard";
import './App.css';

function App() {
  return (
    <div>
      <h1>کار های روز مره</h1>
      <TodoCard title="دوره موبوکالج" />
      <TodoCard title="آموزش زبان" />
      <TodoCard title="تفریح هر هفته" />
      <TodoCard title="گیم زدن" />
      <TodoCard title="فیلم نگاه کردن" />
    </div>
  );
}

export default App;