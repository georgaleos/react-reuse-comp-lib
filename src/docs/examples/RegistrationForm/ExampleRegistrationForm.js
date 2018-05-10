import React from 'react';
import RegistrationForm from 'react-reuse-comp-lib/RegistrationForm';

export default class ExampleRegistrationForm extends React.Component {
    onSubmit = (user) => {
        console.log(user);
    };

    render() {
        return <RegistrationForm onSubmit={this.onSubmit}/>
    }
}