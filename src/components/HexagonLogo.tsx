import logo from "../assets/images/logo.png";

export function HexagonLogo({ className = "" }: { className?: string }) {
  return (
    <img 
      src={logo} 
      alt="STRANXX LLP Logo" 
      className={`object-contain bg-white rounded-sm p-[2px] ${className}`}
    />
  );
}
