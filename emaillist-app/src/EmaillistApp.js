import React from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default class EmaillistApp extends React.Component {
    render(){
        return(
            <div className='EmaillistApp'>
                <SearchBar />
                <Emaillist />
            </div>
        )
    }
}