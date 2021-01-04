// import React, {useState, useEffect} from 'react';

// import './search-panel.css';

// function SearchPanel({onUpdateSearch}) {

//     const [term, updTerm] = useState('');

//     useEffect(() => {
//         onUpdateSearcher();
//     }, [])
//     console.log(term);

//     const onUpdateSearcher = (e) => {
//         // const getTerm = e.target.value;
//         // updTerm(getTerm);
//         onUpdateSearch(term);
//     }

//     return (
//         <input
//             className="form-control search-input"
//             type="text"
//             placeholder="Поиск по записям"
//             // onChange={onUpdateSearcher}
//             onChange={e => updTerm(e.target.value)}
//         />
//     )
// }

// export default SearchPanel;


import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}