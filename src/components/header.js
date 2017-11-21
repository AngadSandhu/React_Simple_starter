import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  Router,
  Link
} from 'react-router';

class Header extends React.Component {
    render(){
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">CourseBook</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Header;