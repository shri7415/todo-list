import React, { Component } from 'react'
import Axios from 'axios';
import '../style/style.css'
import Header from './Header'

class EditTasks extends Component {

    constructor() {
        super();
        this.state = {
            old_task: " ",
            new_task: " "
        }
    }

    onChange = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.old_task!=='')
        {
            Axios.post('/edit', {old_task: this.state.old_task,new_task:this.state.new_task })
                  .then(res => {
                      console.log(res.status);
                    })
                  .catch(err => console.log('error',err));  
        }
    }

    render() {
        return(
            <div className="App">
            <div className='links'>
                <Header />
            </div>
                <form id="to-do-form" method='POST' onSubmit={this.onSubmit}>
                    <input type="text"
                        name="old_task" required
                        id="old_task"
                        placeholder="Enter old task"
                        onChange={this.onChange}
                    /><br /><br />
    
                      <input className="second" type="text"
                        name="new_task" required
                        id="new_task"
                        placeholder="Enter new task"
                        onChange={this.onChange}
                    /><br /><br />
                    <button type="submit">Edit</button>
                </form>
            </div>
        )
    }
}

export default EditTasks;