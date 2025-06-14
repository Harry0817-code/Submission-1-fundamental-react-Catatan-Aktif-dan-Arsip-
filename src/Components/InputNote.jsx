import React from "react";
import PropTypes from "prop-types";

class InputNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: new Date().getTime().toString(),
            title: "",
            body: "",
            archived: false,
            createdAt: new Date().toISOString(),
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState({ title: event.target.value });
    }

    onBodyChangeHandler(event) {
        this.setState({ body: event.target.value });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote({
            title: this.state.title,
            body: this.state.body,
        });
    }

    render() {
        return (
            <>
            <div className="add-new-page__input">
                <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleChangeHandler}/>
                <textarea className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ...." value={this.state.body} onChange={this.onBodyChangeHandler}/>
            </div>
            <div className="add-new-page__action">
                <button type="submit" className="action" title="Simpan" onClick={this.onSubmitHandler}>
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                    </svg>
                </button>
            </div>
            </>
        );
    }
}

InputNote.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default InputNote;