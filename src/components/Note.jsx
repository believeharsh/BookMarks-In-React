import { CiMenuKebab } from "react-icons/ci";
import NoteMenu from "./NoteMenu";

const Note = ({
  BM,
  handleDeleteNote,
  OpenMenu,
  handleOpenMenu,
  HandleOpneNoteDetail,
}) => {
  return (
    <div className="group Container bg-tranparent bg-blend-multiply hover:border-[1px] mx-1 my-1 px-1 py-2 rounded-xl w-[90px] h-[80px] hover:bg-gray-600 hover:border-black   hover:font-thin relative">
      <div
        className="hidden group-hover:block group-hover:text-2xl text-black text-[5px] absolute right-[3px] top-[3px] cursor-pointer"
        onClick={handleOpenMenu}
      >
        <p>
          <CiMenuKebab />
        </p>
      </div>

      <div className="">
        <div className="bg-gray-800 py-3 rounded-full my-1 h-[45px] w-[45px] flex justify-center items-center mx-auto">
          <a href={BM.url} className=" " target="_blank">
            <img
              className="h-8 w-8 text-center"
              src={
                "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" +
                BM.url +
                ""
              }
              alt=""
            />
          </a>
        </div>

        <p className="text-center mb-4">{BM.name}</p>
      </div>
      {OpenMenu ? (
        <div className="absolute top-6 left-0 right-0">
          <NoteMenu
            OpenMenu={OpenMenu}
            handleDeleteNote={handleDeleteNote}
            BM={BM}
            HandleOpneNoteDetail={HandleOpneNoteDetail}
          />
        </div>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
};

export default Note;
