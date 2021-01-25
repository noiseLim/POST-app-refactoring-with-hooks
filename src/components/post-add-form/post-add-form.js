import React, { useState, useEffect } from 'react';

import './post-add-form.css';

function PostAddForm({onAdd}) {

    const [text, updText] = useState('');

    useEffect(() => {
        onSubmit();
        console.log('useEffect()');
    }, [])

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



// import React, { Component } from 'react';

// import './post-add-form.css';

// export default class PostAddForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: ''
//         }
//         this.onValueChange=this.onValueChange.bind(this);
//         this.onSubmit=this.onSubmit.bind(this);
//     }

//     onValueChange(e) {
//         this.setState ({
//             text: e.target.value
//         })
//     }

//     onSubmit(e) {
//         e.preventDefault();
//         this.props.onAdd(this.state.text)
//         this.setState ({
//             text: ''
//         })
//     }

//     render() {
//         return (
//             <form 
//             className="bottom-panel d-flex"
//             onSubmit={this.onSubmit}>
//                 <input
//                     type="text"
//                     placeholder="О чем вы думаете?"
//                     className="form-control new-post-label"
//                     onChange={this.onValueChange}
//                     value={this.state.text}
//                 />
//                 <button
//                     type="submit"
//                     className="btn btn-outline-secondary">
//                     Добавить</button>
//             </form>
//         )
//     }
// }