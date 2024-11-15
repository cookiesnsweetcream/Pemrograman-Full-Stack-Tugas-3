import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const [tasks, setTasks] = useState([]); //mendefinisikan tasks dan setTasks
    const [showForm, setShowFrom] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleShowForm = () => setShowFrom(true);
    const handleCloseForm = () => {
      setShowFrom(false);
      setTaskToEdit(null);
    };

    const addTask = (task) => {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const editTask = (updatedTask) => {
      setTasks(tasks.map(task => (task.id == updatedTask.id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };

    const showEditForm = (task) => {
      setTaskToEdit(task);
      handleShowForm();
    };

    return (
      <Container className="my-5">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-6">
              <h1 className="mb-4 title"><strong>Task List</strong></h1>
            </div>
            <div class="col-md-6 addTask">
              <Button variant="primary" onClick={handleShowForm}>+ Add Task</Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <TaskList tasks={tasks} deleteTask={deleteTask} showEditForm={showEditForm} />
          <TaskForm 
            show={showForm}
            handleClose={handleCloseForm}
            addTask={addTask}
            editTask={editTask}
            taskToEdit={taskToEdit}
          />
        </div>
      </Container>
    );
}

export default App;