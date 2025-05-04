import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 TaskTracker</h1>

      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            {task}
            <button onClick={() => deleteTask(index)} style={styles.deleteBtn}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
  },
  inputRow: {
    display: 'flex',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ccc',
  },
  addBtn: {
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    backgroundColor: '#fff',
    borderRadius: '4px',
    border: '1px solid #eee',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    color: '#ff5555',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default App;
