import React from "react";
import Bmlist from "./Bmlist";
import { useBM } from "../BookMark-Context/BMContext-Provider"; // Assuming this provides your bookmarks
import CategoryContainer from "./CategoryCantainer";
import AddnewBM from "./AddnewBM";

const Coding = () => {
  const { BookMark, handleEditBM, handleDeleteBM } = useBM();

  // Filter bookmarks based on category (e.g., "social")
  const codingBookmarks = BookMark.Coding || []; 

  return (
    <>
      <CategoryContainer>
        <AddnewBM
          category={"Coding"}
        />
        <Bmlist
          bookmarks={codingBookmarks}
          handleEditBM={handleEditBM}
          handleDeleteBM={handleDeleteBM}
          category={"Coding"}
        />
      </CategoryContainer>
    </>
  );
};

export default Coding;
