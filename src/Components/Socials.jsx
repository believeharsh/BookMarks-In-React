import React from "react";
import Bmlist from "./Bmlist";
import { useBM } from "../BookMark-Context/BMContext-Provider"; // Assuming this provides your bookmarks
import AddnewBM from "./AddnewBM";
const Socials = () => {
  const { BookMark, handleEditBM, handleDeleteBM } = useBM();

  // Filter bookmarks based on category (e.g., "social")
  const socialBookmarks = BookMark.Social || [];

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 ">
        <AddnewBM category={"Social"} />

        <Bmlist
          bookmarks={socialBookmarks}
          handleEditBM={handleEditBM}
          handleDeleteBM={handleDeleteBM}
          category={"Social"}
        />
      </div>
    </>
  );
};

export default Socials;
