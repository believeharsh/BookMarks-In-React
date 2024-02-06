import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineEllipsis } from "react-icons/ai";

const Note = ({ id, name, url,  handleDeleteNote }) => {
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
		    <AiOutlineEllipsis className='absolute right-1 text-white text-xl '/>
	        <a href={url} className='text-xl ' target='_blank'>
				{/* <img src={url} alt="" /> */}
				{name}
			</a>
		 </div>
	);
};

export default Note;