import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
})
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'TODO' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await api.get('/tasks');
    setTasks(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/tasks', newTask);
    setNewTask({ title: '', description: '', status: 'TODO' });
    fetchTasks();
  };

  const postTask = async (updatedTask) => {
    await api.put(`/tasks/${updatedTask.id}`, updatedTask);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <select value={newTask.status} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
          <option value="TODO">To Do</option>
          <option value="INPROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <table width="100%">
        <thead>
        <th>
          Title
        </th>
        <th>
          Description
        </th>
        <th>
          Status
        </th>
        <th>
          Action
        </th>
        </thead>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td align='center'>
              {task.title}
              </td><td align='center'>
              <p>{task.description}</p>
              </td><td align='center'>
              <p>
              <select value={task.status} onChange={(e) => postTask({ ...task, status: e.target.value })}>
          <option value="TODO">To Do</option>
          <option value="INPROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select></p>
        </td><td align='center'>
            
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;