import React, {Component} from 'react';

export default class TodoForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    onAdd = (event) => {
        event.preventDefault();
        const {todo} = this.state;
        if(todo)
        {
            this.props.pushToItems(todo);
            this.setState({todo: ''});
        }
        
    }

    onChange = (event) => {
        this.setState({todo: event.target.value});
    }

    render() {
        const {todo} = this.state;
        return(
           <div>
                <div className="form-group">
                    <input type="text" className="form-control" value={todo} name="todo" placeholder="Enter todo ..." onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={this.onAdd}>Create</button>
                </div> 
           </div>
        );
    }
}