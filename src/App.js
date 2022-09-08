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

  // Delete Task (Show all tasks, excluding the task with the :id)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle the preset reminder for each task
  const toggleReminder = (id) => {
    //Go through the tasks, and spread through each item, inverse the value of the preset reminder
    //do this where the id of the current task == id passed in param
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task(s) to Show'}
    </div>
  )
}


export default App;
