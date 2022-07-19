import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import auth from '../../config/auth';
import useAuthentication from '../hooks/useAuthentication';

const Login = (props) => {
    const [username, setUsername] = useState('demo@scrathpay.com');
    const [password, setPassword] = useState('scrathpay123');

    const { authenticateUser, isAuthenticating, validCredentials } =
        useAuthentication();

    useEffect(() => {
        if (validCredentials) {
            auth.login(() => {
                props.history.push('/app');
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [validCredentials]);

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };
    return (
        <div className="login-content">
            <Card>
                <CardBody>
                    <Form>
                        <FormGroup required>
                            <Label for="first_name">Username</Label>
                            <Input
                                required
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={onUsernameChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={onPasswordChange}
                            />
                        </FormGroup>
                        <div
                            className="invalid-feedback"
                            style={{
                                display:
                                    validCredentials === false &&
                                    !isAuthenticating
                                        ? 'inline'
                                        : 'none'
                            }}
                        >
                            Invalid credentials.
                        </div>
                    </Form>

                    <Button
                        color="primary"
                        className="btn-multiple-state show-spinner"
                        outline
                        disabled={isAuthenticating}
                        onClick={() => authenticateUser(username, password)}
                    >
                        Login
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;
