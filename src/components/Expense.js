import React from 'react'

const Expense = (props) => {
    return (
        <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- {props.exp}</div>
                        <div className="budget__expenses--percentage">---</div>
                    </div>
        </div>
    )
}

export default Expense;