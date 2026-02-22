// components/LinkButton.jsx
import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({
  url,
  name,
  logo, // bisa berupa JSX (SVG/icon component), string URL gambar, atau ReactNode
  className = "", // untuk custom style tambahan jika perlu
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        flex items-center justify-center gap-3
        w-full py-4 px-6
        bg-slate-800/60 hover:bg-slate-700/80
        border border-slate-700/50 hover:border-purple-800/50
        rounded-2xl
        text-slate-200 hover:text-purple-300
        transition-all duration-300
        backdrop-blur-sm
        shadow-sm hover:shadow-purple-900/20
        active:scale-[0.98]
        ${className}
      `}
    >
      {/* Logo / Icon */}
      <span className="text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0">
        {typeof logo === "string" ? (
          // Jika logo adalah URL gambar
          <img src={logo} alt={name} className="w-5 h-5 object-contain" />
        ) : (
          // Jika logo adalah JSX (SVG) atau component
          logo
        )}
      </span>

      {/* Nama link */}
      <span className="font-medium text-base">{name}</span>
    </a>
  );
};

LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.oneOfType([
    PropTypes.string, // URL gambar
    PropTypes.node, // JSX / SVG component / emoji
  ]).isRequired,
  className: PropTypes.string,
};

export default LinkButton;
