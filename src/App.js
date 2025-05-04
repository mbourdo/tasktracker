function App() {
    const tasks = ['Buy groceries', 'Walk the dog', 'Read a book'];
  
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>📝 My Tasks</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ marginTop: '0.5rem' }}>
              ✅ {task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
  