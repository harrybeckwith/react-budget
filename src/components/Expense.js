import React from 'react'

const Expense = () => {
    return (
        <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- 0.00</div>
                        <div className="budget__expenses--percentage">---</div>
                    </div>
        </div>
    )
}

export default Expense;