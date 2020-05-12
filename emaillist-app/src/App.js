import React from 'react';
import EmaillistApp from './EmaillistApp';
import data from './data.json'

class App extends React.Component {
    render() {        
        return (
            <EmaillistApp email={data}/>
        );
    }
}

export { App };