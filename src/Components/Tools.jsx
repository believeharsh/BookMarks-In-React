import React from "react";
import Bmlist from "./Bmlist";
import { useBM } from "../BookMark-Context/BMContext-Provider"; // Assuming this provides your bookmarks
import AddnewBM from "./AddnewBM";
const Tools = () => {
  const { BookMark, handleEditBM, handleDeleteBM } = useBM();

  // Filter bookmarks based on category (e.g., "social")
  const ToolsBookmarks = BookMark.Tools || [];
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <AddnewBM category={"Tools"} />

        <Bmlist
          bookmarks={ToolsBookmarks}
          handleEditBM={handleEditBM}
          handleDeleteBM={handleDeleteBM}
          category={"Tools"}
        />
      </div>
    </>
  );
};

export default Tools;
