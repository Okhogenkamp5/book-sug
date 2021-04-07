import React from 'react';

const Form = props => (
    <form onSubmit={props.getBook}>
        <input type="text" name="bookName"/>
        <button>View New York Times Top </button>
    </form>

);

export default Form;