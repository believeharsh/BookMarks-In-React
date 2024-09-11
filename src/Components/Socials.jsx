import React from "react";
import Bmlist from "./Bmlist";
import { useBM } from "../BookMark-Context/BMContext-Provider"; // Assuming this provides your bookmarks

const Socials = () => {
  const { BookMark, handleEditBM, handleDeleteBM } = useBM();

  // Filter bookmarks based on category (e.g., "social")
  const socialBookmarks = BookMark.filter((bm) => bm.category === "social");

  return (
    <Bmlist
      bookmarks={socialBookmarks}
      handleEditBM={handleEditBM}
      handleDeleteBM={handleDeleteBM}
    />
  );
};

export default Socials;