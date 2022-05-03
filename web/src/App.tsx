function App() {
  function Button() {
    return (
      <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">
        Send
      </button>
    );
  }
  return (
    <div className="flex gap-2">
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
