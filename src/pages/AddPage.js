import React from "react";
import { addNote } from "../utils/index";
import NoteForm from "../components/NoteForm";
import {useNavigate} from 'react-router-dom';

function AddPage(){
    const navigate = useNavigate();
    
    function onAddNoteHandler(note){
        addNote(note)
        navigate('/');
    }

    return(
        <section>
            <h2>Tambah Note</h2>
            <NoteForm addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;