// import React, {useState, useEffect} from 'react';

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

// function App() {

//     const [data, updData] = useState([
//         {label: "Going to learn React", important: true, like: false, id: 1},
//         {label: "That is so good", important: false, like: false, id: 2},
//         {label: "I need a break", important: false, like: false, id: 3},
//     ]);
//     const [term, updTerm] = useState('');
//     const [filter, updFilter] = useState('all');
//     const [maxId, updMaxId] = useState(4);

//     useEffect(() => {
//         deleteItem();
//         addItem();
//         onToggleImportant();
//         onToggleLiked();
//         searchPost();
//         onUpdateSearch();
//         onFilterSelect();
//         filterPost();
//         maxId();
//     }, [])

//     function deleteItem(id) {
//         const index = data.findIndex(elem => elem.id === id);

//         const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

//         return {
//             data: newArr
//         }
//     }

//     function addItem(body) {
//         const newItem = {
//               label: body,
//               important: false,
//               id: updMaxId + 1
//         }
//         const newArr = [...data, newItem];

//         return {
//             data: newArr
//         }
//     }

//     function onToggleImportant(id) {
//         const index = data.findIndex(elem => elem.id === id);
//         const old = data[index];
//         const newItem = {...old, important: !old.important};
//         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

//         return {
//             data: newArr
//         }
//     }

//     function onToggleLiked(id) {
//         const index = data.findIndex(elem => elem.id === id);
//         const old = data[index];
//         const newItem = {...old, like: !old.like};
//         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

//         return {
//             data: newArr
//         }
//     }

//     function searchPost(items, term) {
//         if (term.length === 0) {
//             return items
//         }
//         return items.filter((item) => {
//             return item.label.indexOf(term) > -1
//         })
//     }

//     function onUpdateSearch(term) {
//         updTerm(term);
//     }

//     function onFilterSelect(filter) {
//         updFilter(filter);
//     }

//     function filterPost(items, filter) {
//         if (filter === 'like') {
//             return items.filter(item => item.like)
//         } else {
//             return items
//         }
//     }

//     const liked = data.filter(item => item.like).length;
//     const allPosts = data.length;
    
//     const visiblePost = filterPost(searchPost(data, term), filter);
    
//     return (
//         <AppBlock>
//             <AppHeader
//                 liked={liked}
//                 allPosts={allPosts}/>
//             <div className="search-panel d-flex">
//                 <SearchPanel
//                     onUpdateSearch={onUpdateSearch}/>
//                 <PostStatusFilter
//                     filter={filter}
//                     onFilterSelect={onFilterSelect}/>
//             </div>
//             <PostList
//                 posts={visiblePost}
//                 onDelete={deleteItem}
//                 onToggleImportant={onToggleImportant}
//                 onToggleLiked={onToggleLiked}/>
//             <PostAddForm
//                 onAdd={addItem}/>
//         </AppBlock>          
//     )
// }

// export default App;
import React, {Component} from 'react';

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

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: "Going to learn React", important: true, like: false, id: 1},
                {label: "That is so good", important: false, like: false, id: 2},
                {label: "I need a break", important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
              label: body,
              important: false,
              id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    render() {
        console.log(this.state.data);

        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        
        const visiblePost = this.filterPost(this.searchPost(data, term), filter);
        
        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts={visiblePost}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>          
        )
    }
}