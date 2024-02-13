import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";
import NoteMenu from "./NoteMenu";

const Note = ({
  BM,
  handleDeleteNote,
  OpenMenu,
  handleOpenMenu,
  HandleOpneNoteDetail,
}) => {
  return (
    <div className="bg-tranparent  hover:border-[1px] mx-1 my-1 px-1 py-1 rounded-xl w-[90px] h-[70px] hover:bg-gray-400 hover:border-black hover:text-white  hover:font-thin relative">

      <div className="flex-col justify-center items-center mx-auto ">
        <div className="bg-gray-800 py-3 rounded-full flex justify-center items-center my-1">
          <a href={BM.url} className=" text-center" target="_blank">
            <img
              className=""
              src={
                "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" +
                BM.url +
                "&size=12"
              }
              alt=""
            />
          </a>
        </div>
        <p className="text-center">{BM.name}</p>
      </div>

      <div className="absolute top-6 left-0 right-0">
        <NoteMenu
          OpenMenu={OpenMenu}
          handleDeleteNote={handleDeleteNote}
          BM={BM}
          HandleOpneNoteDetail={HandleOpneNoteDetail}
        />
      </div>
    </div>
  );
};

export default Note;
