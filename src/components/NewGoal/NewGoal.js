import React, {useState} from 'react';
import './NewGoal.css';
const NewGoal = (props) => {
    const [enterText, setEnterText] = useState('');
    const addGoalHandler = (event) =>{

        event.preventDefault();
        const newGoal ={
            id: Math.random().toString(),
            text:enterText
        };
       props.onAddGoal(newGoal);
       setEnterText('');
    }
    const textChangeHandler = event =>{
        setEnterText(event.target.value) ;
    }
    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enterText} onChange={textChangeHandler}/>
            <button type="submit"> Add Gaol</button>
        </form>
    )
};

export default NewGoal;