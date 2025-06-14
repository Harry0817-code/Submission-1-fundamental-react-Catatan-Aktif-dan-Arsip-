import React from "react";
import PropTypes from "prop-types";
import {showFormattedDate} from "../utils/index";

class DetailNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note,
    };

    this.onSubmitArchive = this.onSubmitArchive.bind(this);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
    this.onSubmitUnarchive = this.onSubmitUnarchive.bind(this);
  }

  onSubmitUnarchive() {
    this.props.onUnarchive(this.state.note.id);
  }

  onSubmitArchive() {
    this.props.onArchive(this.state.note.id);
  }

  onSubmitDelete() {
    this.props.onDelete(this.state.note.id);
  }

  render() {
    const { note } = this.state;
    const formattedDate = showFormattedDate(note.createdAt);
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{note.title}</h3>
        <p className="detail-page__createdAt">{formattedDate}</p>
        <p className="detail-page__body">{note.body}</p>
        <div className="detail-page__action">
          {note.archived === false && (
          <button className="action" type="submit" title="Arsipkan" onClick={this.onSubmitArchive} fdprocessedid="im94sve">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"></path>
              </svg>
          </button>
          )}
          {note.archived === true && (
            <button className="action" type="submit" title="Aktifkan" onClick={this.onSubmitUnarchive} fdprocessedid="1q2x3y">
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
            </button>
          )}
          <button className="action" type="submit" title="Hapus" onClick={this.onSubmitDelete} fdprocessedid="nonp8">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
          </button>
        </div>
      </section>
    );
  }
}

DetailNote.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailNote;