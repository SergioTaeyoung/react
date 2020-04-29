import FoodList from './FoodList';
import React from 'react';

class App extends React.Component {
    render() {
        const message = 'Hello React';
        return (
            <FoodList />
        );
    }
}

export { App };