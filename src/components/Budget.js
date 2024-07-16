import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
    
    const handleBudgetChange = (event) => {
        
        

        if (totalExpenses > newBudget) {
            alert('Exp greater');
            setNewBudget(budget)
            return;
            
        } 
        
       

            setNewBudget(event.target.value);

            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
    
  
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;
