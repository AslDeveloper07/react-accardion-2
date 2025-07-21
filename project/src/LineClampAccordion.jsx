import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AccordionCard = ({ text, maxLines = 2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const estimatedLines = Math.ceil(text.length / 90);
  const isOverflow = estimatedLines > maxLines;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-4 border border-orange-300 transition-all mt-40">
      <AnimatePresence initial={false}>
        <motion.div
          key={isOpen ? "open" : "closed"}
          initial={{ height: "auto", opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          // exit={{ height: 10, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div
            className="text-gray-800 text-base"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: !isOpen ? maxLines : "unset",
              overflow: "hidden",
            }}
          >
            {text}
          </div>
        </motion.div>
      </AnimatePresence>

      {isOverflow && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-2 text-orange-600 flex items-center gap-1 text-sm"
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </motion.span>
          {isOpen ? "Yopish" : "Davomini ko‘rish"}
        </button>
      )}
    </div>
  );
};

export default AccordionCard;
