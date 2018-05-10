import React from 'react';
import TextInput from 'react-reuse-comp-lib/TextInput';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => {}}
            />
        )
    }
}