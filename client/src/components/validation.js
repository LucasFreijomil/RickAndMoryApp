export default (data)=>{
    const errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'E-Mail is not valid.'
    }
    if(!data.email){
        errors.e2 = 'E-Mail should not be empty.'
    }
    if(data.email.length > 35){
        errors.e3 = 'Cannot be more than 35 characters.'
    }
    if(!/\d/.test(data.password)){
        errors.p1 ='The password must contain at least one number.'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2='The minimum length is 6 and the maximum is 10.'
    }
    return errors
};