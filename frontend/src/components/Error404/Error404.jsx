import React from 'react';

const Error404 = props => {
    setTimeout(() => {
        props.history.push('/')
    }, 2000);
    return (<h1>Error404</h1>)
}

export default Error404;