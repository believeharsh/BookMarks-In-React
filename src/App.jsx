import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import AddNoteDetails from "./components/AddNoteDetails";

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

  useEffect(() => {
    const json = localStorage.getItem("Bookmarks-app-Data");
    const loadedBookmarks = JSON.parse(json);
    if (loadedBookmarks) {
      setNotes(loadedBookmarks)
    }
  }, []);

 

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
    console.log(id)
  };

  return (
    <>
      <Header />
    
      <AddNoteDetails
        SaveNote={SaveNote}
        HandleCloseNoteDetail={HandleCloseNoteDetail}
        handleAddNote={addNote}
      />

      <NotesList
        className=""
        notes={notes}
        OpenMenu={OpenMenu}
        handleOpenMenu={handleOpenMenu}
        handleDeleteNote={deleteNote}
        HandleOpneNoteDetail={HandleOpenNoteDetail}
        BlurWhileNew={BlurWhileNew}
      
        
      />
    </>
  );
};

export default App;
