import React from 'react'

const NewExpense = () => {
    return (
        <div class="expenses">
        <h2 class="expenses__title">Expenses</h2>
        
        <div class="expenses__list">
           
      
            <div class="item clearfix" id="expense-0">
                <div class="item__description">Apartment rent</div>
                <div class="right clearfix">
                    <div class="item__value">- 900.00</div>
                    <div class="item__percentage">21%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>

            <div class="item clearfix" id="expense-1">
                <div class="item__description">Grocery shopping</div>
                <div class="right clearfix">
                    <div class="item__value">- 435.28</div>
                    <div class="item__percentage">10%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
   
            
        </div>
    </div>

    )
}

export default NewExpense;