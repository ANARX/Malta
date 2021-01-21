import React from 'react';
import PostItem from '../PostItem';
import {ListGroup} from 'reactstrap';
import "../PostList/PostList.css";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {

        if (typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostItem {...itemProps}
                              onDelete={() => onDelete(id)}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleLiked={() => onToggleLiked(id)}/>
                </li>
            )
        }
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;