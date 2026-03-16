import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

// ─── MAIN ───

export default function RedDawnWiki() {
  return (
    <div className="wiki-body font-mono text-[11px] text-black min-h-screen">
      <div className="wiki-container">
        <Header />
        <table className="rdp-layout w-full mt-[6px]" cellPadding={0} cellSpacing={12}>
          <tbody>
            <tr>
              <Sidebar />
              <td className="rdp-content align-top">
                <div className="win95-inset px-4 py-3 bg-white min-h-[400px]">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </div>
    </div>
  );
}
