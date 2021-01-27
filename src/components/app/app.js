import React, {useState, useEffect} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
      margin: 0 auto;
      max-width: 800px;
`

function App() {

    const [data, updData] = useState([
        {label: "Going to learn React", important: true, like: false, id: 1},
        {label: "That is so good", important: false, like: false, id: 2},
        {label: "I need a break", important: false, like: false, id: 3},
    ]);
    const [term, updTerm] = useState('');
    const [filter, updFilter] = useState('all');
    const [maxId, updMaxId] = useState(4);

    // useEffect(() => {
    //     console.log(`useEffect()`);
    //     // deleteItem();
    //     // addItem();
    //     // onToggleImportant();
    //     // onToggleLiked();
    //     // searchPost();
    //     // onUpdateSearch();
    //     // onFilterSelect();
    //     // filterPost();

    // }, [data])


    const deleteItem = (id) => {
        updData((data) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return updData(newArr)
        });
        console.log(`deleteItem: ${data}`);
        console.log(data);
    }

    const addItem = (body) => {
        const newItem = {
              label: body,
              important: false,
              id: updMaxId(maxId + 1)
        }
        updData((data) => {
            const newArr = [...data, newItem];
            return updData(newArr)
        })
    }

    const onToggleImportant = (id) => {
        updData((data) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return updData(newArr)
        })
        // console.log(`onToggleImportant: ${data}`);
        // console.log(data);
    }

    const onToggleLiked = (id) => {
        updData((data) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return updData(newArr)
        })
    }

    const searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    const onUpdateSearch = (term) => {
        updTerm(term);
    }

    const onFilterSelect = (filter) => {
        updFilter(filter);
    }

    const filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    const liked = () => {
        console.log(data);
        console.log(Array.isArray(data));
        
        return data.filter(item => item.like).length
    }

    // const liked = data.filter(item => item.like).length;

    // console.log(`liked: ${liked}`);
    // console.log(typeof(liked()));
    // console.log(liked());


    const allPosts = data.length;

    
    const visiblePost = filterPost(searchPost(data, term), filter);
    
    return (
        <AppBlock>
            <AppHeader
                liked={liked()}
                allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel
                    onUpdateSearch={onUpdateSearch}/>
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={onFilterSelect}/>
            </div>
            <PostList
                posts={visiblePost}
                onDelete={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleLiked={onToggleLiked}/>
            <PostAddForm
                onAdd={addItem}/>
        </AppBlock>          
    )
}

export default App;


// import React, {Component} from 'react';

// import AppHeader from '../app-header';
// import SearchPanel from '../search-panel';
// import PostStatusFilter from '../post-status-filter';
// import PostList from '../post-list';
// import PostAddForm from '../post-add-form';

// import './app.css';

// import styled from 'styled-components';

// const AppBlock = styled.div`
//       margin: 0 auto;
//       max-width: 800px;
// `

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data : [
//                 {label: "Going to learn React", important: true, like: false, id: 1},
//                 {label: "That is so good", important: false, like: false, id: 2},
//                 {label: "I need a break", important: false, like: false, id: 3},
//             ],
//             term: '',
//             filter: 'all'
//         };
//         this.deleteItem = this.deleteItem.bind(this);
//         this.addItem = this.addItem.bind(this);
//         this.onToggleImportant = this.onToggleImportant.bind(this);
//         this.onToggleLiked = this.onToggleLiked.bind(this);
//         this.onUpdateSearch = this.onUpdateSearch.bind(this);
//         this.onFilterSelect = this.onFilterSelect.bind(this);

//         this.maxId = 4;
//     }

//     deleteItem(id) {
//         this.setState(({data}) => {
//             const index = data.findIndex(elem => elem.id === id);

//             const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

//             return {
//                 data: newArr
//             }
//         });
//     }

//     addItem(body) {
//         const newItem = {
//               label: body,
//               important: false,
//               id: this.maxId++
//         }
//         this.setState(({data}) => {
//             const newArr = [...data, newItem];
//             return {
//                 data: newArr
//             }
//         })
//     }

//     onToggleImportant(id) {
//         this.setState(({data}) => {
//             const index = data.findIndex(elem => elem.id === id);

//             const old = data[index];
//             const newItem = {...old, important: !old.important};
//             const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
//             return {
//                 data: newArr
//             }
//         })
//     }

//     onToggleLiked(id) {
//         this.setState(({data}) => {
//             const index = data.findIndex(elem => elem.id === id);

//             const old = data[index];
//             const newItem = {...old, like: !old.like};
//             const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
//             return {
//                 data: newArr
//             }
//         })
//     }

//     searchPost(items, term) {
//         if (term.length === 0) {
//             return items
//         }
//         return items.filter((item) => {
//             return item.label.indexOf(term) > -1
//         })
//     }

//     onUpdateSearch(term) {
//         this.setState({term});
//     }

//     onFilterSelect(filter) {
//         this.setState({filter});
//     }

//     filterPost(items, filter) {
//         if (filter === 'like') {
//             return items.filter(item => item.like)
//         } else {
//             return items
//         }
//     }

//     render() {

//         const {data, term, filter} = this.state;

//         const liked = data.filter(item => item.like).length;
//         const allPosts = data.length;
        
//         const visiblePost = this.filterPost(this.searchPost(data, term), filter);
        
//         return (
//             <AppBlock>
//                 <AppHeader
//                     liked={liked}
//                     allPosts={allPosts}/>
//                 <div className="search-panel d-flex">
//                     <SearchPanel
//                         onUpdateSearch={this.onUpdateSearch}/>
//                     <PostStatusFilter
//                         filter={filter}
//                         onFilterSelect={this.onFilterSelect}/>
//                 </div>
//                 <PostList
//                     posts={visiblePost}
//                     onDelete={this.deleteItem}
//                     onToggleImportant={this.onToggleImportant}
//                     onToggleLiked={this.onToggleLiked}/>
//                 <PostAddForm
//                     onAdd={this.addItem}/>
//             </AppBlock>          
//         )
//     }
// }