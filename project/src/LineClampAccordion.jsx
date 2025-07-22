import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionCard = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 600px konteynerda 90 ta harf 1 qator deb taxmin qilamiz
  const estimatedLines = Math.ceil(text.length / 90);
  const isOverflow = estimatedLines > 2;

  return (
    <div className="bg-white p-5 rounded-lg w-full shadow-md mb-4 border border-gray-200 transition-all max-w-[600px] mx-auto mt-40">
      <div
        className="text-gray-800 mb-3 font-medium text-base transition-all duration-300"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: !isOpen ? 2 : "unset",
          overflow: "hidden",
        }}
      >
        {text}
      </div>

      {isOverflow && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm text-orange-600 flex items-center gap-1 cursor-pointer"
        >
          <span className="transition-transform duration-300 ">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
          {isOpen ? "Yopish" : "Ko'ring"}
        </button>
      )}
    </div>
  );
};

export default AccordionCard;
