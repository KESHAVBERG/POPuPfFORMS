// buttons
const loginbtn = document.querySelector('.login-btn');
const registerbtn = document.querySelector('.register-btn');
// container
const logincontainer = document.querySelector('.login-form');
const registercontainer = document.querySelector('.register-form');
// cancel butns 
const loginCancel = document.querySelector('.cancel');
const registerCancel = document.querySelector('.register-cancel');

// function  to show login form 

loginbtn.addEventListener('click' , ()=>{
    logincontainer.style.display = 'block'
});

// function  to close login form 

loginCancel.addEventListener('click' , ()=>{
    logincontainer.style.display = 'none'
})

// functino to show to register form 

registerbtn.addEventListener('click',function() {
    registercontainer.style.display = 'block'
});

// function  to close login form 

registerCancel.addEventListener('click' , ()=>{
    registercontainer.style.display = 'none'
})