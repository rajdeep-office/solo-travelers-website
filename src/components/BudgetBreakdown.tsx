import React from 'react';

const BudgetBreakdown: React.FC = () => {
    const budgetData = {
        totalBudget: 1500,
        expenses: {
            flights: 400,
            accommodation: 600,
            food: 300,
            activities: 200,
            transportation: 100,
        },
    };

    const renderExpenseBreakdown = () => {
        return Object.entries(budgetData.expenses).map(([category, amount]) => (
            <div key={category} className="budget-item">
                <span className="budget-category">{category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                <span className="budget-amount">${amount}</span>
            </div>
        ));
    };

    return (
        <div className="budget-breakdown">
            <h2>Budget Breakdown</h2>
            <div className="total-budget">
                <span>Total Budget: </span>
                <span>${budgetData.totalBudget}</span>
            </div>
            <div className="expenses">
                <h3>Expenses</h3>
                {renderExpenseBreakdown()}
            </div>
        </div>
    );
};

export default BudgetBreakdown;