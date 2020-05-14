import React, { Component } from 'react'
import Axios from 'axios';
import '../style/style.css'
import Header from './Header'

class DeleteTasks extends Component {

    constructor() {
        super();
        this.state = {
            task: " "
        }
    }

    onChange = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.task!=='')
        {
            Axios.post('/delete', {task: this.state.task})
                  .then(res => {
                      console.log(res.status);
                    })
                  .catch(err => console.log('error',err));  
        }
    }

    render() {
        return(
            <div className="App">
                <div className="links">
                    <Header />
                </div>
                <div>
                <form id="to-do-form" method='POST' onSubmit={this.onSubmit}>
                    <input type="text"
                        name="task" required
                        id="task"
                        placeholder="Enter task"
                        onChange={this.onChange}
                    /><br /><br />
                    <button type="submit">Delete</button>
                </form>
                </div>
            </div>
        )
    }
}

export default DeleteTasks;