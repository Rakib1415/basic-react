import React from 'react';

import './Goallist.css';

const GoalList = (props) =>{
    return(
        <ul className="course-list">
          {props.goal.map((goal)=>{
            return <li key={goal.id}>{goal.text}</li>
          })}
      </ul>
    );
}

export default GoalList;