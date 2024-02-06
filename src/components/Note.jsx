import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import { AiOutlineEllipsis } from "react-icons/ai";
import NoteMenu from './NoteMenu';

const Note = ({ id, name, url,  handleDeleteNote, OpenMenu, handleOpenMenu}) => {
	// const [OpenMenu, setOpenMenu] = useState(false)

	// const handleOpneMenu = () => {
	// 	if(OpenMenu){
	// 		setOpenMenu(!OpenMenu)
	
	// 	}
	
	// }
	// const handleCloseMenu = () => {
	// 	setOpenMenu()
	// }

	return (
		// <div className='bg-yellow-400 border-black border-[1px] mx-1 my-1 px-3 py-2 rounded-xl max-w-[150px] '>
		// 	<span className='text-black text-xl'>{name}</span>
		// 	<div className="">
		// 		<small className='text-black text-sm font-mono'>{url}</small>
		// 		<MdDeleteForever
		// 			onClick={() => handleDeleteNote(id)}
		// 			className='delete-icon'
		// 			size='1.3em'
		// 		/>
		// 	</div>
		// </div>

		<div className="bg-tranparent  hover:border-[1px] mx-1 my-1 px-3 py-2 rounded-xl w-[70px] h-[70px] hover:bg-gray-400 hover:border-black hover:text-white  hover:font-thin relative">
		    <AiOutlineEllipsis className='absolute right-1 text-white text-xl hover:bg-gray-200  p-[1px] hover:rounded-xl hover:text-black active:bg-green-800' onClick={handleOpenMenu} />

	        <a href={url} className='text-sm' target='_blank'>
		
				{name}
			</a>
			<div className="">
			<NoteMenu OpenMenu={OpenMenu}
			
			
			  />
			</div>
			
		 </div>
	);
};

export default Note;