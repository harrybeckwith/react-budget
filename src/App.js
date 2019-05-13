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
      newExp: [],
      percent: 0,
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


  this.setState({
    total,

  }, () => {

    let percent = '';

    if(this.state.exp) {

      percent = Math.round((this.state.exp / this.state.inc) * 100);
    } else {
      percent = 0;
    }


  

    this.setState({
      percent,
    })


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

removeItem = (i, type) => {


  if(type === 'exp') {

      const newArr = [ ...this.state.newExp];
      const exp = this.state.exp - this.state.newExp[i].amount;
      const total = this.state.total + this.state.newExp[i].amount;


      newArr.splice(i, 1);

      this.setState({
        newExp: newArr,
        exp,
        total,
      })

  } else {

    const newArr = [ ...this.state.newInc];

    newArr.splice(i, 1);

    this.setState({
      newInc: newArr,
    })

  }


}


  render() {

    return (
      <div className="App">
        <div className="top">
          <div className="budget">
            <Available total={this.state.total} />
            <Income inc={this.state.inc} />
            <Expense exp={this.state.exp}  percent ={this.state.percent}/>
          </div>
        </div>
        <div className="bottom">
          <AddItem createInc={this.createInc} createExp={this.createExp}/>
          <div className="container clearfix">
          <div className="income">
          <h2 className="icome__title">Income</h2>
            {Object.keys(this.state.newInc).map((item, index) => (
    
                <NewIncome key={index} removeItem={this.removeItem} amount={this.state.newInc[item].amount} desc={this.state.newInc[item].desc} />  

            ))}    
        </div>       

        <div className="expenses">
        <h2 className="expenses__title">Expenses</h2> 
            {Object.keys(this.state.newExp).map((item, index) => (
              <NewExpense  key={index} index={index} removeItem={this.removeItem} amount={this.state.newExp[item].amount} desc={this.state.newExp[item].desc} />   
            ))}  
            </div>             
          </div>
        </div>
      </div>
    );
}
}

export default App;
