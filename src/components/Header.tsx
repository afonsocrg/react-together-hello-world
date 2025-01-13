import reactTogetherLogo from '../assets/react-together.svg';

export function Header() {
  return (
    <div>
      <div>
        <a href="https://reacttogether.dev" target="_blank" className="mb-4">
          <img
            src={reactTogetherLogo}
            className="m-auto max-h-20"
            alt="React Together logo"
          />
        </a>
      </div>
      <h1>React Together Demo!</h1>
      <div className="text-sm mt-5">
        {/* <a
          href="."
          target="_blank"
          className="text-gray-500 hover:text-gray-600"
        > */}
        <a
          href="."
          target="_blank"
          className="text-black py-2 px-3 bg-gray-200 rounded  hover:bg-gray-300 hover:text-black hover:no-underline no-underline"
        >
          {/* <IoOpenOutline className="m-auto" /> */}
          Open this demo in a new tab!
        </a>
      </div>
    </div>
  );
}
