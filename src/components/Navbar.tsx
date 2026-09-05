import { HexagonLogo } from "./HexagonLogo";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel">
      <div className="max-w-[1024px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
          <HexagonLogo className="h-8 w-auto" />
          <span className="font-semibold text-lg tracking-tight text-[#1d1d1f]">STRAN<span className="text-[#D4AF37]">XX</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/products" className="font-sans text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Products</Link>
          <a href="/#services" className="font-sans text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Services</a>
          <a href="/#resources" className="font-sans text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Resources</a>
          <a href="/#ethos" className="font-sans text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Ethos</a>
        </div>

        <button className="font-sans text-[11px] bg-[#1d1d1f] text-white px-3 py-1 rounded-full font-medium hover:bg-[#1d1d1f]/90 transition-colors">
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
