import React from 'react';
import EmaillistItem from 'EmaillistItem';

export default class Emaillist extends React.Component {
    render(){
        let emaillist =[];
        this.props.emails.forEach(function(element){
            emaillist.push(<EmaillistItem
                name={'${element.firstName} ${element.lastName}'}
                email={element.email}
            />);
        })
        return(
            <ul className='Emaillist'>
                <Emaillistitem />
            </ul>
        )
    }
}