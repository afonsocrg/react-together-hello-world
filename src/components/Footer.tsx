import { useState } from 'react';

export function Footer() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  function InfoBox() {
    return (
      <div className="w-[18rem] bg-white rounded-xl border shadow-md px-5 pb-3 pt-2">
        <div className="text-pretty flex flex-col gap">
          <p>
            <strong>Having trouble opening this demo in a new window?</strong>
          </p>
          <p>👉 Make sure your browser is configured to run WebContainers.</p>
          <p>
            For more info, check out{' '}
            <a
              target="_blank"
              href="https://developer.stackblitz.com/platform/webcontainers/browser-config"
            >
              this guide
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Info Box */}
      {showInfo && (
        <div className="absolute bottom-[5rem] right-[0.5rem]">
          <InfoBox />
        </div>
      )}

      {/* Footer Buttons */}
      <div className="flex gap-2 items-end justify-center pt-[0.75rem] px-[1rem] pb-[1rem]">
        {/* New Tab Button */}
        <a
          className="py-[0.5rem] rounded-lg border border-gray-800 bg-blue-500 shadow-xl w-full hover:bg-blue-600 group no-underline cursor-pointer"
          style={{ boxShadow: '1px 3px 0px 0px #374151' }}
          href="."
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            window.open(
              '.',
              '_blank',
              'width=800,height=600,resizable=yes,popup=1'
            );
          }}
        >
          <span className="text-white group-hover:text-gray-200 no-underline text-lg font-semibold tracking-tight">
            Open in a new tab
          </span>
        </a>

        {/* Info Button */}
        <div
          className="py-[0.5rem] rounded-lg border border-gray-800 bg-blue-200 shadow-xl px-[0.5rem] group hover:bg-blue-300 cursor-pointer"
          style={{ boxShadow: '1px 3px 0px 0px #374151' }}
          onClick={toggleInfo}
        >
          <span className="no-underline text-lg tracking-tight text-gray-800">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
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
    </>
  );
}
