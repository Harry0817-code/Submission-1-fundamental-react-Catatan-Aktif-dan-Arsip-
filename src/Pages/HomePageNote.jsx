import React from "react";
import { Link } from 'react-router-dom';
import {getActiveNotes} from "../utils/local-data";
import ListNote from "../Components/ListNote";

class HomePageNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getActiveNotes(),
        };

        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    }

    onSearchNoteHandler(event) {
        const searchQuery = event.target.value.toLowerCase();
        const filteredNotes = getActiveNotes().filter(note => 
            note.title.toLowerCase().includes(searchQuery)
        );
        this.setState({ notes: filteredNotes });
    }

    render() {
        return (
            <>
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <section className="search-bar">
                    <input type="text" placeholder="Cari berdasarkan judul ..." onChange={this.onSearchNoteHandler}/>
                </section>
                <ListNote activedNotes={this.state.notes}/>
                <div className="homepage__action">
                    <Link to={"/addNote"}>
                        <button className="action" type="button" title="Tambah" fdprocessedid="3bpfb2j">
                            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </section>
            </>
        );
    }
}

export default HomePageNote;
