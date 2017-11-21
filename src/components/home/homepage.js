import React from 'react';
import { Link } from  'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome to ReactJS Crud Application</h1>
                <p>Featuring all about React , Redux , Babel and Much More </p>
                <Link to="about" className="btn btn-primary">Learn More</Link>
            </div>
        );
    }
} 


export default HomePage 