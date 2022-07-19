import React, { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback
} from 'reactstrap';
import validateForm from '../../utils/validateForm';

const SideModal = ({
    isVisible,
    onDismiss,
    onSubmitNewUser,
    onEditUser,
    user
}) => {
    const initialFormValues = {
        first_name: '',
        last_name: '',
        email: '',
        role: 'Doctor',
        status: 'Active'
    };

    const initialValidFormValues = {
        first_name: null,
        last_name: null,
        email: null
    };
    const [formValues, setFormValues] = useState(initialFormValues);

    const [validFormValues, setValidFormValues] = useState(
        initialValidFormValues
    );

    useEffect(() => {
        if (user) {
            let { first_name, last_name, email, role, status } = user;
            setFormValues({ first_name, last_name, email, role, status });
            setValidFormValues({
                first_name: true,
                last_name: true,
                email: true
            });
        } else {
            setFormValues(initialFormValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const validateInput = (e) => {
        let { name, value } = e.target;
        const isValid = validateForm(name, value);

        setValidFormValues({ ...validFormValues, [name]: isValid });
    };

    const isFormValid = Object.values(validFormValues).reduce(
        (isFieldValid, previousFields) => previousFields && isFieldValid
    );

    const handleChange = () => {
        setFormValues({
            ...formValues,
            status: formValues.status === 'Inactive' ? 'Active' : 'Inactive'
        });
    };

    const onValueChange = (e) => {
        let { name, value } = e.target;

        name = name === 'select' ? 'role' : name;
        setFormValues({ ...formValues, [name]: value });
    };

    const submitNewUser = () => {
        if (user?.id) {
            onEditUser(formValues, user.id);
        } else {
            onSubmitNewUser(formValues);
        }
        onDismiss();
    };

    return (
        <>
            <Modal
                isOpen={isVisible}
                toggle={onDismiss}
                wrapClassName="modal-right"
            >
                <ModalHeader>Create new user</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup required>
                            <Label for="first_name">First Name *</Label>
                            <Input
                                required
                                type="text"
                                name="first_name"
                                id="first_name"
                                value={formValues.first_name}
                                invalid={validFormValues.first_name === false}
                                onChange={(event) => {
                                    validateInput(event);
                                    onValueChange(event);
                                }}
                            />
                            <FormFeedback>This field is required.</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name *</Label>
                            <Input
                                type="text"
                                name="last_name"
                                id="last_name"
                                value={formValues.last_name}
                                invalid={validFormValues.last_name === false}
                                onChange={(event) => {
                                    validateInput(event);
                                    onValueChange(event);
                                }}
                            />
                            <FormFeedback>This field is required.</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email *</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={formValues.email}
                                invalid={validFormValues.email === false}
                                onChange={(event) => {
                                    validateInput(event);
                                    onValueChange(event);
                                }}
                            />
                            <FormFeedback>
                                Looks like there is an issue with your email.
                                Please input a correct email.
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Role</Label>
                            <Input
                                onChange={onValueChange}
                                type="select"
                                name="select"
                                value={formValues.role}
                                id="exampleSelect"
                            >
                                <option>Doctor</option>
                                <option>Admin</option>
                                <option>Accountant</option>
                            </Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    checked={formValues.status === 'Active'}
                                    onChange={handleChange}
                                    type="checkbox"
                                />{' '}
                                Active
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={onDismiss}>
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        onClick={submitNewUser}
                        disabled={!isFormValid}
                    >
                        {user?.id ? 'Update user' : 'Add User'}
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default SideModal;
