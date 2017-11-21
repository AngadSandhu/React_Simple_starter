// Main file through which the entire components render

import React , { PropTypes } from 'react';
import Header from './header';

class App extends React.Component{
    render(){
        return(
            
            <div className="container-fluid">
                <Header />   
                {this.props.children}
            </div>
        );  
    }
}

App.propTypes = {
    children :PropTypes.object.isRequired
};

// If we comment the above code out it gives a warning of : "children" is missing in props validation 

export default App;