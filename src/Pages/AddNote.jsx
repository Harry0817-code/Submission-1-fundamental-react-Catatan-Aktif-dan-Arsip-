import React from "react";
import InputNote from "../Components/InputNote";
import { useNavigate } from 'react-router-dom';
import { addNote } from "../utils/local-data";

function AddNote() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note);
        navigate("/");
    }

    return (
        <section className="add-new-page">
            <InputNote addNote={onAddNoteHandler} /> 
        </section>
    )
}

export default AddNote;