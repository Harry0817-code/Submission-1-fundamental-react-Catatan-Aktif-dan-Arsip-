import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {showFormattedDate} from "../utils/index";

ItemListNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

function ItemListNote({ id, title, createdAt, body }) {
    const formattedDate = showFormattedDate(createdAt);
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{formattedDate}</p>
            <p className="note-item__body">{body}</p>
        </article>
    );
}

export default ItemListNote;