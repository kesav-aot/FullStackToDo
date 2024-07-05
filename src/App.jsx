import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Components/Nav';
import Modal from './Components/Modal';
import TaskList from './Components/TaskList';
import CompletedTaskList from './Components/CompletedTaskList';
import Navbottom from './Components/Navbottom';
import ConfirmModal from './Components/deleteModal'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const openModal = (index) => {
    setSelectedTaskIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTaskIndex(null);
  };

  const addTask = (newTask) => {
    axios.post('http://localhost:5000/api/tasks', newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
  };

  const deleteTask = (index) => {
    const taskId = tasks[index].id;
    axios.delete(`http://localhost:5000/api/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter((_, i) => i !== index));
        closeModal();
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  const completeTask = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    axios.put(`http://localhost:5000/api/tasks/${tasks[index].id}`, updatedTask)
      .then(response => {
        const newTasks = tasks.map((task, i) => (i === index ? response.data : task));
        setTasks(newTasks);
      })
      .catch(error => console.error('Error completing task:', error));
  };

  const updateTask = (index) => {
    setCurrentTask({ index, task: tasks[index] });
  };

  const saveUpdatedTask = (updatedTask) => {
    axios.put(`http://localhost:5000/api/tasks/${currentTask.task.id}`, updatedTask)
      .then(response => {
        const updatedTasks = tasks.map((task, i) =>
          i === currentTask.index ? response.data : task
        );
        setTasks(updatedTasks);
        setCurrentTask(null);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  const sortTasks = (sort) => {
    if (sort === 'Newest_First') {
      setTasks([...tasks].sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate)));
    } else if (sort === 'Oldest_First') {
      setTasks([...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Nav />
      <Navbottom search={search} setSearch={setSearch} sortTasks={sortTasks} />
      <Modal id="add" name="Add Task" func={addTask} />
      <Modal id="update" name="Update Task" func={saveUpdatedTask} task={currentTask?.task} />
      <TaskList
        tasks={filteredTasks}
        completeTask={completeTask}
        updateTask={updateTask}
        openModal={openModal}
      />
      <CompletedTaskList
        tasks={filteredTasks}
        uncompleteTask={completeTask} 
        updateTask={updateTask}
        deleteTask={deleteTask}
        setTasks={setTasks}
      />
      <ConfirmModal
        show={modalVisible}
        handleClose={closeModal}
        deleteTask={deleteTask}
        index={selectedTaskIndex}
      />
    </>
  );
};

export default App;
