import React from 'react';
import { Route, IndexRoute } from 'react-router';   

import App from './components/app';
import HomePage from './components/home/homepage';
import About from './components/about/about';
import Courses from './components/courses/courses';


// const Routes = () =>{
//     return (
//     <Route path="/" component={App}>
//         <IndexRoute component={HomePage}/>
//         <Route path="about" component={About}/>
//     </Route>    
    
//     );
// }

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={About}/>
        <Route path="courses" component={Courses}/>
    </Route>    
    
);