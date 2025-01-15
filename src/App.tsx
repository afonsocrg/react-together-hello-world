import { useStateTogether } from 'react-together';

export default function CountButtonTogether() {
  const [count, setCount] = useStateTogether('count', 0);

  return (
    <div className="flex flex-row h-full gap-2 justify-center items-center m-auto">
      <button
        className="bg-gray-400 py-2 px-4 rounded-md text-white"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <button
        className="bg-gray-400 py-2 px-4 rounded-md text-white"
        onClick={() => setCount((prev) => (prev === undefined ? 1 : prev + 1))}
        onContextMenu={(e) => {
          e.preventDefault();
          setCount(0);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}
