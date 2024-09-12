import React from "react";
const CategoryContainer = ({ children }) => {
  return (
    <div className="left-0 right-0 bottom-0 top-0 overflow-auto">
      <div className="max-w-4xl mx-auto p-4">
        <div className="everything-card border-1 rounded-xl px-2 py-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
