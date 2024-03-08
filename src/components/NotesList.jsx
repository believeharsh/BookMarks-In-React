import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({
  notes,
  handleDeleteNote,
  HandleOpneNoteDetail,
  BlurWhileNew,
  OpenMenu,
  handleOpenMenu,
}) => {
  return (
    <div
      className={`bg-transparent px-2 py-2  ${BlurWhileNew ? "blur-sm" : ""}`}
    >
      <div className="flex border-white border-[1px] py-2 rounded-xl justify-center flex-wrap  mx-auto max-w-[400px] px-2]">
        {notes.map((BM) => (
          <Note
            key={BM.id}
            BM={BM}
            Id={BM.id}
            OpenMenu={OpenMenu}
            handleOpenMenu={handleOpenMenu}
            handleDeleteNote={handleDeleteNote}
            HandleOpneNoteDetail={HandleOpneNoteDetail}
          />
        ))}

        <AddNote HandleOpneNoteDetail={HandleOpneNoteDetail} />
      </div>
    </div>
  );
};

export default NotesList;
