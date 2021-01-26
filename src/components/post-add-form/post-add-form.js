import React, { useState } from 'react';

import './post-add-form.css';

function PostAddForm({onAdd}) {

    const [text, updText] = useState('');

    const onSubmit = () => {
        onAdd(text);
        updText('');
    }

    return (
        <form 
        className="bottom-panel d-flex"
        onSubmit={(e) => onSubmit(e.preventDefault())}>
            <input
                type="text"
                placeholder="О чем вы думаете?"
                className="form-control new-post-label"
                onChange={(e) => updText(e.target.value)}
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