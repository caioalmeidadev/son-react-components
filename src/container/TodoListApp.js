import React, { Component } from 'react';
import TodoForm from './../components/TodoForm';
import { TodoList } from './../components/TodoList';

export default class TodoListApp extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    
    pushToItems = (todo) => {
        this.setState({
            items: [...this.state.items,todo]
        })
    }
    
    removeFromItems = (index) => {
        const { items } = this.state;
        items.splice(index,1);
        this.setState(items);
    }
    render() {
        const { items } = this.state;
        return (
            <div id="app" className="container">
            <h2>TodoList</h2>    
            <TodoForm pushToItems={this.pushToItems} />
            <hr/>
            <TodoList items={items} removeFromItems={this.removeFromItems} />
            </div>
        );
    }
}
