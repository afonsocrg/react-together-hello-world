export default function Footer() {
  return (
    <div className="flex gap-2 items-end justify-center pt-[0.75rem] px-[1rem] pb-[1rem]">
      {/* ---New Tab Button --- */}
      <a
        className="py-[0.5rem] rounded-lg border border-gray-800 bg-blue-500 shadow-xl w-full hover:bg-blue-600 group no-underline cursor-pointer"
        style={{ boxShadow: "1px 3px 0px 0px #374151" }}
        href="."
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          window.open(
            ".",
            "_blank",
            "width=800,height=600,resizable=yes,popup=1"
          );
        }}
      >
        <span className="text-white group-hover:text-gray-200 no-underline text-lg font-semibold tracking-tight">
          Open in a new tab
        </span>
      </a>
      {/* ---Info Button --- */}
      <div
        className="py-[0.5rem] rounded-lg border border-gray-800 bg-blue-200 shadow-xl px-[0.5rem] group hover:bg-blue-300 cursor-pointer"
        style={{ boxShadow: "1px 3px 0px 0px #374151" }}
      >
        <span className="no-underline text-lg tracking-tight text-gray-800">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="28px"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m4.93 4.93 4.24 4.24"></path>
            <path d="m14.83 9.17 4.24-4.24"></path>
            <path d="m14.83 14.83 4.24 4.24"></path>
            <path d="m9.17 14.83-4.24 4.24"></path>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
        </span>
      </div>
    </div>
  );
}
