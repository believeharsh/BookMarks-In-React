
import React from "react";

const CategoryContainer = ({ children, isEditing }) => {
  return (
    <div className="relative left-0 right-0 bottom-0 top-0 overflow-auto">
      <div className={`max-w-4xl mx-auto mt-3 p-4 ${isEditing ? 'blur-sm' : ''}`}>
        <div className=" everything-card border-1 rounded-xl px-2 py-2">
          {children} {/* This will contain the bookmarks */}
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
