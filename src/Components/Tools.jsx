import React from "react";
import Bmlist from "./Bmlist";
import { useBM } from "../BookMark-Context/BMContext-Provider"; // Assuming this provides your bookmarks
import CategoryContainer from "./CategoryCantainer";
import AddnewBM from "./AddnewBM";
const Tools = () => {
  const { BookMark, handleEditBM, handleDeleteBM } = useBM();

  // Filter bookmarks based on category (e.g., "social")
  const ToolsBookmarks = BookMark.Tools || [] ; 
  return (
    <CategoryContainer>
      <AddnewBM />
      <Bmlist
        bookmarks={ToolsBookmarks}
        handleEditBM={handleEditBM}
        handleDeleteBM={handleDeleteBM}
        category={"Tools"}
      />
    </CategoryContainer>
  );
};

export default Tools;
