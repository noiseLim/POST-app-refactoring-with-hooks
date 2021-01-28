import React, {useState, useEffect} from 'react';

import './search-panel.css';

function SearchPanel({onUpdateSearch}) {

    const [term, setTerm] = useState('');

    useEffect(() => {
        onUpdateSearch(term)
    }, [term])

    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={e => setTerm(e.target.value)}
        />
    )
}

export default SearchPanel;