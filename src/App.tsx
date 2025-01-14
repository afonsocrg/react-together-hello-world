import { useStateTogether } from "react-together";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useStateTogether("count", 0);

  return (
    <Layout>
      <div className="flex items-center justify-center w-full h-full">
        <button
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg border border-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </Layout>
  );
}

export default App;
