import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const CustomDropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-56 relative" ref={ref}>
      <p className="text-sm font-medium mb-1 text-zinc-300">{label}</p>

      {/* Selected value */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex justify-between items-center px-4 py-2
          border border-zinc-700 rounded-lg bg-zinc-900
          text-zinc-200 hover:border-amber-500 transition
        "
      >
        <span className="truncate">{value || "All"}</span>
        <FiChevronDown
          className={`text-lg transition-transform duration-200 ${
            open ? "rotate-180 text-amber-400" : "text-zinc-400"
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
          <div
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
          >
            All
          </div>

          {options.map((opt) => {
            const labelValue = opt.label || opt;
            return (
              <div
                key={labelValue}
                onClick={() => {
                  onChange(labelValue);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
              >
                {labelValue}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
