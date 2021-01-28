import React, {useState} from 'react';

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

    const [data, setData] = useState([
        {label: "Going to learn React", important: true, like: false, id: 1},
        {label: "That is so good", important: false, like: false, id: 2},
        {label: "I need a break", important: false, like: false, id: 3},
    ]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [maxId, setMaxId] = useState(4);

    const deleteItem = (id) => {
        setData((data) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return newArr
        });
    }

    const addItem = (body) => {
        setMaxId(maxId + 1)
        const newItem = {
              label: body,
              important: false,
              id: maxId
        }
        setData((data) => {
            const newArr = [...data, newItem];
            return newArr
        })
    }

    const onToggleImportant = (id) => {
        setData((data) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return newArr
        })
    }

    const onToggleLiked = (id) => {
        setData((data) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return newArr
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
        setTerm(term);
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    const liked = data.filter(item => item.like).length

    const allPosts = data.length;
    
    const visiblePost = filterPost(searchPost(data, term), filter);
    
    return (
        <AppBlock>
            <AppHeader
                liked={liked}
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