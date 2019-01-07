import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Field inline>
                    <label>Username</label>
                    <Input placeholder='username' />
                    </Form.Field>
                    <Form.Field inline>
                    <label>Password</label>
                    <Input placeholder='password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default LoginPage;
