import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import AddNoteDetails from "./components/AddNoteDetails";
import NoteMenu from "./components/NoteMenu";

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

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/believeharsh11/",
    },
    {
      id: nanoid(),
      name: "Github",
      url: "https://www.github.com",
    },
    {
      id: nanoid(),
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      id: nanoid(),
      name: "YouTube",
      url: "https://www.youtube.com/",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("Boomarks-app-Data", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("Boomarks-app-Data"));

    if (savedNotes) {
      setNotes(savedNotes);
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
