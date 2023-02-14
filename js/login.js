// 1.step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3: get password 
    // set id on the html element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step:4 verify email and password

    if(email === 'samim@gmail.com' && password === 'samim'){
        window.location.href = 'bank.html';
    } else{
        alert('হালায় কামডা করতাছে কি ')
    }
})