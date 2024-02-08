import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleDeleteNote,
	HandleOpneNoteDetail,
	BlurWhileNew,
	OpenMenu,
	handleOpenMenu

}) => {
	return (
		<div className={`bg-blue-500 border-black border-[1px] px-2 py-2  ${BlurWhileNew ? 'blur-sm' : ''}`}>
		<div className="flex justify-center flex-wrap w-[80vw] mx-auto">
			{notes.map((BM) => (
				<Note key={BM.id}
				    id={BM}
					OpenMenu={OpenMenu}
					handleOpenMenu={handleOpenMenu}
				
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