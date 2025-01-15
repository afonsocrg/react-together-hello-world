import reactTogetherLogo from '../assets/react-together.svg';

export function Header() {
  return (
    <div className="flex items-end gap-4 justify-center pt-[1rem] pb-[1rem]">
      <a href="https://reacttogether.dev" target="_blank">
        <img
          src={reactTogetherLogo}
          className="h-[2.5rem]"
          alt="React Together logo"
        />
      </a>
      <span className="text-4xl font-bold">React Together</span>
    </div>
  );
}
