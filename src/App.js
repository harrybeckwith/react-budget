import React from 'react';
import './App.css';
import Available from './components/Available';
import Income from './components/Income';
import Expense from './components/Expense';
import AddItem from './components/AddItem';
import NewIncome from './components/NewIncome';
import NewExpense from './components/NewExpense';


function App() {
  return (
    <div className="App">
    <div className="top">
      <div className="budget">
      <Available/>
        <Income/>
        <Expense/>
      </div>
    </div>
    <div className="bottom">
      <AddItem/>


      <div class="container clearfix">
               
                
      <NewIncome/>   
      <NewExpense/>   
                
               
    </div>
  
    </div>
    </div>
  );
}

export default App;
