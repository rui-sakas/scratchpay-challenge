const validateForm = (name, value) => {
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    let isValid;
    if (name === 'email') {
        isValid = value !== '' && emailRegex.test(value);
    } else {
        isValid = value.trim() ? true : false;
    }
    return isValid;
};

export default validateForm;
