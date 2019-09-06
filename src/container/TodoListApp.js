import React, { Component } from 'react';
import TodoForm from './../components/TodoForm';
import { TodoList } from './../components/TodoList';
import {WelcomeMessage} from './../components/Message';
import { getTodos } from '../services/api';
export default class TodoListApp extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    async componentDidMount() {
        const {data} = await getTodos();
        this.setState({items: data});
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
            <WelcomeMessage />
            <TodoForm pushToItems={this.pushToItems} />
            <hr/>
            <TodoList items={items} removeFromItems={this.removeFromItems} />
            </div>
        );
    }
}
