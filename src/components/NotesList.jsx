import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	HandleOpneNoteDetail,
	BlurWhileNew
}) => {
	return (
		<div className={`bg-blue-500 border-black border-[1px] px-2 py-2  ${BlurWhileNew ? 'blur-sm' : ''}`}>
		<div className="flex justify-center flex-wrap w-[80vw] mx-auto">
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
		
			<AddNote HandleOpneNoteDetail={HandleOpneNoteDetail}
		
			 />
			</div>
		</div>
	);
};

export default NotesList;