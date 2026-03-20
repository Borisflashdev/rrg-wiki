import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LightboxProvider } from "./context/LightboxContext";

export default function RedDawnWiki() {
  return (
    <LightboxProvider>
      <div className="min-h-screen flex bg-[#f8f9fa] text-[14px] text-[#202122]">
        <div className="hidden mobile:block self-stretch">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <Header />
          <main className="flex-1 bg-white px-6 pb-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </LightboxProvider>
  );
}
