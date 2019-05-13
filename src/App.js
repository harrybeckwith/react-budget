import React from 'react';
import './App.css';
import Available from './components/Available';
import Income from './components/Income';
import Expense from './components/Expense';
import AddItem from './components/AddItem';
import NewIncome from './components/NewIncome';
import NewExpense from './components/NewExpense';


class App extends React.Component {

  state = {
      total: 0,
      inc:  0,
      exp: 0,
      newInc: [],
      newExp: []
  }

createItem = (item, stateKey) => {

   // create new item
   let newType = this.state[stateKey].slice('');
   newType.push(item);

   return newType;

}

totalAmounts = (stateKey, type) => {


  const amounts = this.state[stateKey].map(item => {
    return parseInt(item.amount)
  })

  let total = 0;

  for(let i in amounts) {
    total += amounts[i]
  }

  this.setState({
    [type]: total
  }, () => {

    this.totalAll();

  })

}

totalAll = () => {

  const total = parseInt(this.state.inc - this.state.exp);

  console.log(total);

  this.setState({
    total,
  })

}

  createInc = (item) => {

        const newType = this.createItem(item, 'newInc');

          this.setState({
            newInc: newType,
   
          }, ()=> {

            this.totalAmounts('newInc', 'inc');
        
          })

  }

  createExp = (item) => {

    const newType = this.createItem(item, 'newExp');

      this.setState({
        newExp: newType,

      }, ()=> {

        this.totalAmounts('newExp', 'exp');

      })

}


  render() {

    return (
      <div className="App">
        <div className="top">
          <div className="budget">
            <Available total={this.state.total} />
            <Income inc={this.state.inc} />
            <Expense exp={this.state.exp}/>
          </div>
        </div>
        <div className="bottom">
          <AddItem createInc={this.createInc} createExp={this.createExp}/>
          <div className="container clearfix">           
            <NewIncome/>   
            <NewExpense/>                
          </div>
        </div>
      </div>
    );
}
}

export default App;
