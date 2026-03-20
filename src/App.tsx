import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LightboxProvider } from "./context/LightboxContext";

const nationModules = import.meta.glob("./pages/nations/*.tsx") as Record<string, () => Promise<{ default: ComponentType }>>;

function NationRouter() {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setComponent(null);
    setNotFound(false);
    const loader = nationModules[`./pages/nations/${slug}.tsx`];
    if (!loader) { setNotFound(true); return; }
    loader().then(mod => setComponent(() => mod.default));
  }, [slug]);

  if (notFound) return <NotFound />;
  if (!Component) return null;
  return <Component />;
}

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
              <Route path="/nations/:slug" element={<NationRouter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </LightboxProvider>
  );
}
