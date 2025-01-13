import { useStateTogether } from 'react-together';
import { Header } from './components';
import './App.css';

function App() {
  const [count, setCount] = useStateTogether('count', 0);

  return (
    <div className="flex flex-col space-between">
      <Header />
      <div className="mt-10">
        <button
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg border border-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
