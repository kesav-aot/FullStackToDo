import React from 'react';

const TaskList = ({ tasks, updateTask, completeTask, Searchitem, openModal }) => {
  console.log("tasks", tasks);
  const checkDate = (date) => {
    const today = new Date();
    const dueDate = new Date(date);
    return dueDate < today;
   

  }
  return (
    <div className="active-task-list" style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1440px', gap: '20px', margin: '0 auto', padding: '20px 0' }}>
      <h4>Active Tasks</h4>
      {tasks.map((task, index) => (
        !task.completed && (!Searchitem || task.title.toLowerCase().includes(Searchitem.toLowerCase())) && (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '10px', border: '1px solid #D0D5DD', padding: '20px', borderRadius: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="task">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <input type="radio" style={{ width: '30px', height: '30px' }} checked={task.completed} onChange={() => completeTask(index)} />
                <h3>{task.title}</h3><p className="dot" style={{ backgroundColor: task.completed ? 'green' : 'orange' , width: '10px', height: '10px', borderRadius: '50%'}}></p>
              </div>
              <p>{task.description}</p>
             <div className="dynamicCalender"> <p style={{ color: checkDate(task.dueDate) ? 'red' : 'none' }} ><img src={checkDate(task.dueDate) ? "./src/assets/calender2.svg" : "./src/assets/calendar.svg"}  alt=""  /> by {task.dueDate}</p></div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className='btn' id='update' data-bs-toggle="modal" data-bs-target="#update" onClick={() => updateTask(index, task)}>
                <img src="./src/assets/Delete.svg" alt="Update" />
              </button>
              <button className='btn' onClick={() => openModal(index)} >
                <img src="./src/assets/Group.svg" alt="Delete" />
              </button>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default TaskList;
