import React from 'react';
import TaskList from './TaskList';

export default class Card extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            showDetails: false
        }
    }
    render() {
        let cardDetails;
        if(this.state.showDetails) {
            cardDetails = (
                <div className='Card__Details'>
                    {this.props.description }
                    <TaskList tasks={ this.props.tasks } />
                </div>
            )
        }
        const sideColorBar = {
          position: 'absolute',
          zIndex: -1,
          top:0,
          left: 0,
          bottom: 0,
          width:7,
          backgroundColor:this.props.color  
        };

        return (
            <div className='Card'>
                <div style={sideColorBar}/>
                <div className='Card__Title' onClick={ () => this.setState( { showDetails: !this.state.showDetails } ) }>
                    { this.props.title }
                </div>
                { cardDetails }
          </div>
        )
    }
}