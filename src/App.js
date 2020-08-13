import React,{useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {

 const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text:'Finish the courses'},
    {id:'cg2', text:'Learn something'},
    {id:'cg3', text:'Please ask question and answer'}
  ]);

  const addNewGoalHandler =(newGoal)=>{
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevState => prevState.concat(newGoal));
  }
  return (
    <div className="course-goals">
      <h2>Course goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goal={courseGoals}/>
    
    </div>
  );
}

export default App;
