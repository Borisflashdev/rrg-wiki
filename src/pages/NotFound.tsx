import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="text-center py-8">
      <h1 className="text-[22px] font-bold text-[#8B0000] font-mono mb-2">404 — Page Not Found</h1>
      <div className="wiki-hr" />
      <p className="text-[12px] text-[#333] mt-3 mb-3">
        The page you are looking for does not exist or has been moved.
      </p>
      <span onClick={() => navigate("/")} className="text-[#CC0000] underline cursor-pointer text-[12px]">
        » Return to Main Page
      </span>
    </div>
  );
}
