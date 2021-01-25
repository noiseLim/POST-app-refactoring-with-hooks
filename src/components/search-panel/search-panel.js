import React, {useState, useEffect} from 'react';

import './search-panel.css';

function SearchPanel({onUpdateSearch}) {

    const [term, updTerm] = useState('');

    useEffect(() => {
        onUpdateSearch(term)
    }, [term])

    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={e => updTerm(e.target.value)}
        />
    )
}

export default SearchPanel;