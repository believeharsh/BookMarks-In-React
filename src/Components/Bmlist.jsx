import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useBM } from "../BookMark-Context/BMContext-Provider";
import CommonBM from "./CommonBM";
import EditBookmark from "./EditBM";
import EditingPannel from "./EditingPannel";
import CategoryContainer from "./CategoryCantainer";

const Bmlist = ({ bookmarks, category }) => {
  const [editBM, setEditBM] = useState(null); // Track the bookmark being edited
  const [panelOpenId, setPanelOpenId] = useState(null);
  const { handleEditBM, handleDeleteBM, BookMark } = useBM();
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePanel = (BmId) => {
    setPanelOpenId(panelOpenId === BmId ? null : BmId);
  };

  const openEditPanel = (BmId) => {
    const BMToEdit = BookMark[category].find((BM) => BM.id === BmId);
    setEditBM(BMToEdit);
    setPanelOpenId(null); // Close the panel when opening the edit form
  };

  const handleClickOutside = (e) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setPanelOpenId(null);
      setEditBM(null); // Close the edit panel too
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <CategoryContainer>
      {/* Conditional rendering based on whether we're editing or not */}
      {!editBM ? (
        <div className="flex flex-wrap gap-4 m-2 mt-5">
          {bookmarks.map((BM) => {
            const isPanelOpen = panelOpenId === BM.id;

            return (
              <div
                key={BM.id}
                className="hover:border-[0.2px] hover:border-gray-100 rounded-xl group relative"
              >
                <div className="flex items-center py-2 hover:rounded-xl justify-center px-4 ">
                  <div className="flex justify-center items-center">
                    <CommonBM BM={BM} />
                  </div>

                  <button
                    className="ThreeDotBTN"
                    onClick={() => togglePanel(BM.id)}
                    ref={buttonRef}
                  >
                    <BsThreeDotsVertical />
                  </button>
                </div>

                <div>
                  {isPanelOpen && (
                    <EditingPannel
                      BM={BM}
                      panelRef={panelRef}
                      openEditPanel={openEditPanel}
                      handleDeleteBM={handleDeleteBM}
                      handleClickOutside={handleClickOutside}
                      category={category}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Render EditBookmark component in place of the bookmarks when editing
        <div className="flex items-center justify-center max-w-3xl">
          <EditBookmark
            BM={editBM}
            handleEditSubmit={handleEditBM}
            handleDeleteBM={handleDeleteBM}
            closeEditPanel={() => setEditBM(null)} // Close the edit panel after submitting
            category={category}
          />
        </div>
      )}
    </CategoryContainer>
  );
};

export default Bmlist;
