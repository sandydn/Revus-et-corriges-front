import React from 'react';
import dataTestMonth from './dataTestMonth.json';

const ListEvent = () => {
    return dataTestMonth.map(data => <p>{data.title}</p>)
}

 



export default ListEvent
