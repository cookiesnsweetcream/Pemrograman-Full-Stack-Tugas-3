import React from 'react';
import { Button, Card, Badge, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  // Fungsi untuk mengatur warna berdasarkan prioritas
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-danger'
      case 'Medium':
        return 'text-warning'
      case 'Low':
        return 'text-success'
      default:
        return '';
    }
  }

  // Fungsi untuk menentukan persentase progress berdasarkan status
  const getProgressPercentage = (status) => {
    switch (status) {
      case 'Done':
        return 100
      case 'In Progress':
        return 50
      case 'To Do':
        return 0
      default:
        return 0;
    }
  }

  // Fungsi untuk menentukan warna progress berdasarkan status
  const getProgressColor = (status) => {
    switch (status) {
      case 'Done':
        return 'success'
      case 'In Progress':
        return 'warning'
      case 'To Do':
        return 'primary'
      default:
        return 'secondary';
    }
  }

  return (
    <div className="container task-card">
      {tasks.map((task, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body>
            <div className="row align-items-center">
              <div className="col-md-3">
                <strong>Task</strong> 
                <p>{task.name}</p>
              </div>
              <div className="col-md-2">
                <strong>Priority</strong>
                <p className={`${getPriorityColor(task.priority)}`}><strong>{task.priority}</strong></p>
              </div>
              <div className="col-md-2 text-center">
                <strong>Status</strong><br />
                <p><Badge bg={getProgressColor(task.status)}>{task.status}</Badge></p>
              </div>
              <div className="col-md-2">
                <div className="position-relative" style={{ width: '60px', height: '60px' }}>
                  <ProgressBar
                    variant={getProgressColor(task.status)}
                    now={getProgressPercentage(task.status)}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'transparent',
                      position: 'absolute'
                    }}
                  />
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: 'white',
                      position: 'absolute',
                      top: '3px',
                      left: '3px'
                    }}
                  >
                    {getProgressPercentage(task.status)}%
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-end">
                <Button variant="primary" onClick={() => showEditForm(task)} className="me-2">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>
                  <i className="bi bi-trash3-fill"></i>
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>    
      ))}
    </div>
  );
};

export default TaskList;