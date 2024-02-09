import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineEllipsis } from "react-icons/ai";
import NoteMenu from './NoteMenu';

const Note = ({BM, handleDeleteNote, OpenMenu, handleOpenMenu, HandleOpneNoteDetail}) => {

	return (
	
		<div className="bg-tranparent  hover:border-[1px] mx-1 my-1 px-3 py-2 rounded-xl w-[70px] h-[70px] hover:bg-gray-400 hover:border-black hover:text-white  hover:font-thin relative">
		    <AiOutlineEllipsis className='absolute right-1 text-white text-xl hover:bg-gray-200  p-[1px] hover:rounded-xl hover:text-black active:bg-green-800' onClick={handleOpenMenu} />

	        <a href={BM.url} className='text-sm' target='_blank'>
		
				<img src={"https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + BM.url + "&size=24"}alt="" />
				<span>{BM.name}</span>
			</a>
			<div className="">
			<NoteMenu OpenMenu={OpenMenu} handleDeleteNote={handleDeleteNote} BM={BM} HandleOpneNoteDetail={HandleOpneNoteDetail}
			
			
			  />
			</div>
			
		 </div>
	);
};

export default Note;