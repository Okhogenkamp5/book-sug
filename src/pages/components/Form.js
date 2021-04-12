import React from 'react';

const Form = props => (
    <form onSubmit={props.getBook} >
        <button>View Books!</button>
    </form>

);

export default Form;