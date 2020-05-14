import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowswrHistory from 'history/createBrowserHistory';
import AddTasks from './component/AddTasks'
import DeleteTasks from './component/DeleteTasks'
import EditTasks from './component/EditTasks'
import Print from './component/Print'

ReactDOM.render(
    <Router history={createBrowswrHistory()}>
        <Switch>
            <Route exact={true} path='/' component={AddTasks} />
            <Route path='/delete' component={DeleteTasks} />
            <Route path='/edit' component={EditTasks} />
            <Route path='/show' component={Print} />
        </Switch>
    </Router>,
     document.getElementById('root')
);