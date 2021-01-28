import React, { useState } from 'react';

import './post-add-form.css';

function PostAddForm({onAdd}) {

    const [text, setText] = useState('');

    const onSubmit = () => {
        onAdd(text);
        setText('');
    }

    return (
        <form 
        className="bottom-panel d-flex"
        onSubmit={(e) => onSubmit(e.preventDefault())}>
            <input
                type="text"
                placeholder="О чем вы думаете?"
                className="form-control new-post-label"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить</button>
        </form>
    )
}

export default PostAddForm;