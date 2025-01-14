import Footer from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[26rem] h-full flex flex-col max-h-[44rem] border-gray-300 bg-white">
        <Header />
        <div className="flex-1 overflow-y-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
