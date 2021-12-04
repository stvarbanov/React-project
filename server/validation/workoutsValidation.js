const nameValidation = name => {
    if(!name || name == '') {
        throw { errorMsg: 'Name field must be filled!' }
    }

    return name;
}

const numberValidation = input => {
    const regEx = /^\d+$/;
    const min = 0;

    if(regEx.test(input)) {
        if(Number(input) < min) {
            throw { errorMsg: `Exercise weight must be at least ${min} kg/lbs!` };
        }
    } else {
        if(input.toLowerCase() !== 'bodyweight') {
            throw { errorMsg: `Exercise weight must be either BODYWEIGHT or a number!` };
        }
    }

    return input;
}

module.exports = {
    nameValidation,
    numberValidation,
}