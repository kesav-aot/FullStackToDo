
let tasks = [
];
const getTasks = (req, res) => {
    res.json(tasks);
  }
  const addTask= (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    tasks.push(newTask);
    res.status(201).json(newTask);
  }

  const updateTask=(req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    tasks = tasks.map(task => (task.id === taskId ? updatedTask : task));
    res.json(updatedTask);
  }
   
  const deleteTask= (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(204).send();
  }


  const clearTasks = (req, res) => {
    remainngTasks = tasks.filter(task => task.completed === false);
    tasks = [...remainngTasks];
    res.status(204).send();
  }

  module.exports = {getTasks,addTask,updateTask,deleteTask,clearTasks}