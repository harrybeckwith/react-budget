import React from 'react'

const NewIcome = () => {
    return (
        <div class="income">
        <h2 class="icome__title">Income</h2>
        
        <div class="income__list">
           
          
            <div class="item clearfix" id="income-0">
                <div class="item__description">Salary</div>
                <div class="right clearfix">
                    <div class="item__value">+ 2,100.00</div>
                    <div class="item__delete">
                        <button class="item__delete--btn">
                            <i class="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="item clearfix" id="income-1">
                <div class="item__description">Sold car</div>
                <div class="right clearfix">
                    <div class="item__value">+ 1,500.00</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
    
            
        <div class="item clearfix" id="inc-0"> <div class="item__description">ds</div><div class="right clearfix"><div class="item__value">+ 44.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div></div>
    </div>
    )
}

export default NewIcome;