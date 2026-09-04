import { HexagonLogo } from "./HexagonLogo";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-[1024px] mx-auto">
        <div className="flex items-center gap-3 border-b border-black/10 pb-8 mb-8">
          <HexagonLogo className="h-8 w-auto grayscale opacity-70" />
          <span className="font-semibold text-lg tracking-tight text-[#86868b]">STRAN<span className="text-[#D4AF37]">XX</span></span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-xs">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Diesel & Gas Gensets</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Electrical Panels</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Servo Stabilisers</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Battery Energy Storage</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Solar Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-xs">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">About Us</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Ethos</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Case Studies</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Careers</a></li>
              <li><a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#86868b] shrink-0 mt-0.5" />
                <span className="text-[#86868b] text-xs leading-relaxed">
                  PLT NO. 45, INDUSTRIAL AREA GULDHAR 2,<br />
                  MEERUT ROAD, GHAZIABAD. 201017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#86868b] shrink-0" />
                <span className="text-[#86868b] text-xs">
                  +918287252775
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#86868b] shrink-0" />
                <span className="text-[#86868b] text-xs">
                  info@stranxx.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-xs">Certifications</h4>
            <div className="text-[#86868b] text-xs border border-black/5 p-4 rounded-xl inline-block bg-[#f5f5f7]">
              ISO 9001:2015 Certified
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#86868b] text-xs">
            Copyright &copy; {new Date().getFullYear()} Stranxx LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs border-l border-black/10 pl-6">Terms of Service</a>
            <a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors text-xs border-l border-black/10 pl-6">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
