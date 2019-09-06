import React from 'react';
import TodoListItem from './TodoListItem';

export const TodoList = (props) => {
    return(
      <div>
        <ul className="list-group">
            { props.items.map((item,index) => (
                <TodoListItem key={index} index={index} item={item} removeFromItems={props.removeFromItems}/>
            ))}
            
        </ul>
      </div>
    );
}