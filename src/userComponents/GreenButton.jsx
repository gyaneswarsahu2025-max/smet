import { Link } from "react-router-dom";

export default function GreenButton({
  text = "Click Here",
  to = "#",
  onClick,
  showArrow = true,
  borderColor = "border-emerald-600",
  textColor = "text-emerald-700",
  bgHover = "hover:bg-emerald-50",
  arrowBg = "bg-emerald-600",
  rounded = "rounded-md",
  className = "",
}) {
  const baseStyle = `
    group inline-flex items-center gap-3 px-6 py-3 
    border ${borderColor} ${textColor} 
    ${rounded} font-semibold text-lg 
    transition duration-300 ${bgHover}
    ${className}
  `;

  const arrowStyle = `
    flex items-center justify-center 
    w-6 h-6 rounded-full 
    ${arrowBg} text-white text-sm 
    transition-transform duration-300 
    group-hover:translate-x-1
  `;

  if (to && to !== "#") {
    return (
      <Link to={to} className={baseStyle}>
        <span>{text}</span>
        {showArrow && <span className={arrowStyle}>→</span>}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyle}>
      <span>{text}</span>
      {showArrow && <span className={arrowStyle}>→</span>}
    </button>
  );
}