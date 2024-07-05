import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConfirmModal.css'; // Assuming the CSS is saved in a separate file

const ConfirmModal = ({ show, handleClose, deleteTask, index }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-confirm" role="document">
        <div className="modal-content">
          <div className="modal-header flex-column">
            {/* <div className="icon-box">
              <i className="material-icons">&#xE5CD;</i>
            </div> */}
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            <h4 className="modal-title w-100">Delete Task?</h4>
          </div>
          <div className="modal-body">
            <p>Do you really want to delete these records? This process cannot be undone.</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
