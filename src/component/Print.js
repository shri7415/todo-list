import React, { Component } from 'react'
import axios from 'axios';
import '../style/style.css'
import Header from './Header'

class Print extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
            axios.post("show/", { task: this.props.task },
            { headers: { "Content-Type": "application/json" } }
            ).then(user => {
                console.log('data',user);
                this.setState({ userData: user.data });
                console.log('all required data',user.data);
            })
    }

    render() {
        let userData = this.state.userData;
        let tableData = [];
        for (let i in userData) {
                tableData.push(<tr><td>{userData[i]}</td></tr>);
        }

        return (

            <div className="App">
            <div className='links'>
                <Header />
            </div>
                <form id="to-do-form" >
                    <div className="table">

                    <p> {tableData} </p>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Print;