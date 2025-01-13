import { useState } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { TbHelpTriangle } from 'react-icons/tb';

interface HelpDialogCollapsedProps {
  onExpand: (e: React.MouseEvent) => void;
}
function HelpDialogCollapsed({ onExpand }: HelpDialogCollapsedProps) {
  return (
    <button
      onClick={onExpand}
      className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full border border-gray-300 drop-shadow-lg"
    >
      <TbHelpTriangle />
    </button>
  );
}

interface HelpDialogExpandedProps {
  onCollapse: (e: React.MouseEvent) => void;
}
function HelpDialogExpanded({ onCollapse }: HelpDialogExpandedProps) {
  return (
    <div className="p-2 rounded-xl bg-gray-100 text-start p-4 max-w-lg border relative">
      <button
        onClick={onCollapse}
        className="absolute top-1 right-0 w-6 h-6 cursor-pointer text-gray-800"
      >
        <IoCloseCircleSharp color="#666666" />
      </button>
      <p>
        <strong>Having trouble opening this demo in a new window?</strong>
      </p>
      <p>
        👉 Make sure your browser is configured to run WebContainers. Check out{' '}
        <a
          target="_blank"
          href="https://developer.stackblitz.com/platform/webcontainers/browser-config"
        >
          this guide
        </a>{' '}
        on how to do it!
      </p>
      <p>
        Worry not, this won't happen when you deploy or run this code locally!!
      </p>
    </div>
  );
}

export function HelpDialog() {
  const [isMinimized, setIsMinimized] = useState<boolean>(true);

  const insideWebContainer = window.location.origin.endsWith('webcontainer.io');

  if (!insideWebContainer) return;

  return (
    <div className="fixed bottom-2 left-2 ">
      {isMinimized ? (
        <HelpDialogCollapsed onExpand={() => setIsMinimized(false)} />
      ) : (
        <HelpDialogExpanded onCollapse={() => setIsMinimized(true)} />
      )}
    </div>
  );
}
