import React from "react";
import { unarchiveNote, archiveNote, deleteNote, getAllNotes } from "../utils/local-data";
import DetailNote from "../Components/DetailNote";
import { useParams, useNavigate } from "react-router-dom";


function ShowDetailNote() {
    const { id } = useParams();
    const note = getAllNotes().find((note) => note.id === id);

    const navigate = useNavigate();

    function onSubmitUnarchive() {
        unarchiveNote(note.id);
        navigate("/");
    }

    function onSubmitArchive() {
        archiveNote(note.id);
        navigate("/");
    }

    function onSubmitDelete() {
        deleteNote(note.id);
        navigate("/");
    }

    if (!note) {
        return <p>Catatan tidak ditemukan.</p>;
    }

    return (
        <section className="show-detail-note">
            <DetailNote note={note} onDelete={onSubmitDelete} onArchive={onSubmitArchive} onUnarchive={onSubmitUnarchive} />
        </section>
    );
}

export default ShowDetailNote;