//import logo from './logo.svg';
//import './App.css';
//Import the created component
import Header from './components/Header';
//import Tasks Component for use
import Tasks from './components/Tasks';
//Import useState
import { useState } from 'react'

const App = () => {
  //declare a state, and the func to update it, //i.e const(state, function_to_update_the_state)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
  ])


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}


export default App;
