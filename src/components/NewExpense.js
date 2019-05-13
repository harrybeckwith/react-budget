import React from 'react'

const NewExpense = (props) => {
    return (
        <div className="expenses__list">
            <div className="item clearfix" id="expense-0">
                <div className="item__description">{props.desc}</div>
                <div className="right clearfix">
                    <div className="item__value">- {props.amount}</div>
                    <div className="item__percentage">%</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={()=>props.removeItem(props.index, 'exp')}><i className="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewExpense;