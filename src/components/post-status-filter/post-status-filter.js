import React from 'react';

import './post-status-filter.css';

function PostStatusFilter({filter, onFilterSelect}) {

    const button = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'}
    ]

    const buttons = button.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-info' : 'btn-outline-secondary'
        return (
            <button 
            key={name} 
            type='button' 
            className={`btn ${clazz}`}
            onClick={() => onFilterSelect(name)}>{label}</button>
        )
    });
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}
export default PostStatusFilter;