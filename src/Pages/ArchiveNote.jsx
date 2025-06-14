import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import ListNote from "../Components/ListNote";

class ArchiveNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            archivedNotes: getArchivedNotes(),
        };

        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    }

    onSearchNoteHandler(event) {
        const searchQuery = event.target.value.toLowerCase();
        const filteredNotes = getArchivedNotes().filter(note => 
            note.title.toLowerCase().includes(searchQuery) || 
            note.body.toLowerCase().includes(searchQuery)
        );
        this.setState({ archivedNotes: filteredNotes });
    }

    render() {
        return (
            <section className="archives-page">
                <h2>Catatan Arsip</h2>
                <section className="search-bar">
                    <input type="text" placeholder="Cari berdasarkan judul ..." onChange={this.onSearchNoteHandler}/>
                </section>
                <ListNote activedNotes={this.state.archivedNotes} />
            </section>
        );
    }
}

export default ArchiveNote;