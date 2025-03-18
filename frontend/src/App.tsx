import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './components/StudentList';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Students Marks Application</h1>
                <Switch>
                    <Route path="/" exact component={StudentList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;