import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completed, setCompleted] = useState(false);


  useEffect(() => {
    if (props.task) {
      setTitle(props.task.title);
      setDescription(props.task.description);
      setDueDate(props.task.dueDate);
      setCompleted(props.task.completed);
    }
  }, [props.task]);

  const handleSave = () => {
    const updatedTask = { title, description, dueDate, completed };
    props.func(updatedTask);
    setTitle('');
    setDescription('');
    setDueDate('');
    setCompleted('');
    localStorage.setItem('tasks', JSON.stringify(updatedTask));

  };

  return (
    <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="taskForm">
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <br />
                <input type="text" id="title" name="title" className="content1" placeholder="eg: Create two ad banners."
                  value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description <img src="./Pictures/Vector.svg" alt="" /></label>
                <br />
                <textarea id="description" name="description" className="content1" placeholder="Add your task description."
                  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="dueDate">Due Date</label><br />
                <input type="date" id="dueDate" name="dueDate" className="content1" placeholder="2022-07-21"
                  value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSave} data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
