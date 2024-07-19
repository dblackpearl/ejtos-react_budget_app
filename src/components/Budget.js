import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [currency, setCurrency] = useState('')
    
    const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
    
    const handleBudgetChange = (event) => {

        if (totalExpenses > newBudget) {
            alert('You cannot reduce the budget value lower than the spending');
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
<div style={{ }}>
    <label htmlFor='currency'>Currency</label>
        <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setCurrency(event.target.value)}>
            <option defaultValue value="Dollar" name="Dollar">$ Dollar</option>
            <option value="Pound" name="Pound">£ Pound</option>
            <option value="Euro" name="Euro">€ Euro</option>
            <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
        </select>
    </div>
{/* <span>Budget: £{budget}</span> */}
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;
