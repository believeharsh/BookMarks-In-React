import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import AddNoteDetails from "./components/AddNoteDetails";
import EditNote from "./components/EditNote";


const App = () => {
  const [SaveNote, setSaveNote] = useState(false);
  const [BlurWhileNew, setBlurWhileNew] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false)

	const handleOpenMenu = () => {
		setOpenMenu(!OpenMenu)
		}
	
  const HandleOpenNoteDetail = () => {
    setSaveNote(!SaveNote);
    setBlurWhileNew(!BlurWhileNew)
  };
  const OpneEditNote = (BM) => {
    setSaveNote(!SaveNote)
    setBlurWhileNew(!BlurWhileNew)
    
  }

  const HandleCloseNoteDetail = () => {
    setSaveNote();
    setBlurWhileNew()
  };


  const getDatafromLocal = () => {
    let Data = localStorage.getItem("Bookmarks-app-Data");
    if(Data){
      return JSON.parse(localStorage.getItem("Bookmarks-app-Data"))
    }
    else{
      return [];
    }
  }

  const [notes, setNotes] = useState(getDatafromLocal);


  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem("Bookmarks-app-Data", json);
  }, [notes])


  const addNote = (bookmark) => {
    
    const newNote = {
      id: bookmark.id,
      name: bookmark.name,
      url : bookmark.url
   
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

  };

  const deleteNote = (id) => {
    const DeletedNoted = notes.filter((note) => note.id !== id);
    setNotes(DeletedNoted);
    
  };

  return (
    <>
    <div className="MainContainerBg fixed left-0 right-0 bottom-0 top-0 overflow-auto">
    <div className="">
    <Header />
    </div>
   
      <div className="">
      <AddNoteDetails
        SaveNote={SaveNote}
        HandleCloseNoteDetail={HandleCloseNoteDetail}
        handleAddNote={addNote}
      />
      </div>
     
       <div className="">
       <NotesList
        className=""
        notes={notes}
        OpenMenu={OpenMenu}
        handleOpenMenu={handleOpenMenu}
        handleDeleteNote={deleteNote}
        HandleOpneNoteDetail={HandleOpenNoteDetail}
        BlurWhileNew={BlurWhileNew}
        OpneEditNote={OpneEditNote}
      
        
      />
       </div>
    
      <div className="">
      <EditNote 
        SaveNote={SaveNote}
        HandleCloseNoteDetail={HandleCloseNoteDetail}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        BM={BM}
      />
      </div>
      
      </div>
    </>
  );
};

export default App;
