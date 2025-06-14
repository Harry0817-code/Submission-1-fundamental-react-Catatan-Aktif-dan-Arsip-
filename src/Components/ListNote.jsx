import React from "react";
import ItemListNote from "./ItemListNote";
import PropTypes from "prop-types";

ListNote.propTypes = {
    activedNotes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ).isRequired,
}

function ListNote(activedNotes) {
    return (
        <section className="notes-list">
            {activedNotes.activedNotes.map((note) => (
                <ItemListNote key={note.id} {...note} />
            ))}
            {activedNotes.activedNotes.length === 0 && (
                <p className="notes-list__empty">Tidak ada catatan</p>
            )}
        </section>
    );
}

export default ListNote;