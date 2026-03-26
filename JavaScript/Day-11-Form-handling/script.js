let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let FirstNamePattern = /^[A-Za-z\s]+$/;
let lastNamePattern = /^[A-Za-z.]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


let userregistrationForm = document.querySelector('#userRegistration');

userregistrationForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let firstName = userregistrationForm.querySelector("input[name='firstName']")?.value;
    let lastName = userregistrationForm.querySelector("input[name='lastName']")?.value;
    let email = userregistrationForm.querySelector("input[name='email']")?.value;
    let password = userregistrationForm.querySelector("input[name='password']")?.value;
    let confirmPassword = userregistrationForm.querySelector("input[name='confirmPassword']")?.value;

    let selectedSkillsElms = userregistrationForm.querySelectorAll("input[name='skill']:checked")
    let skills = Array.from(selectedSkillsElms).map((el)=>(el?.value))
    
    let error = false;
    // console.log(validateFirstName(firstName))
    if(!validateFirstName(firstName, )){
        error = true;
        let feedBackel = userregistrationForm.querySelector("input[name='firstName']").nextElementSibling;
        feedBackel.textContent = "First Name is required & must have atlease 3 Characters";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = userregistrationForm.querySelector("input[name='firstName']").nextElementSibling;
        feedBackel.textContent = "";
    }
    if(!validateLastName(lastName)){
        error = true;
        let feedBackel = userregistrationForm.querySelector("input[name='lastName']").nextElementSibling;
        feedBackel.textContent = "Last Name is required & must have atlease 1 Characters";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = userregistrationForm.querySelector("input[name='lastName']").nextElementSibling;
        feedBackel.textContent = "";
    }
    if(!validateEmail(email)){
        error = true;
        let feedBackel = userregistrationForm.querySelector("input[name='email']").nextElementSibling;
        feedBackel.textContent = "Please Enter a valid email";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = userregistrationForm.querySelector("input[name='email']").nextElementSibling;
        feedBackel.textContent = "";
    }
    if(!validatePassword(password)){
        error = true;
        let feedBackel = userregistrationForm.querySelector("input[name='password']").nextElementSibling;
        feedBackel.textContent = "Password must be 6 characters long and contain at least one of each: lowercase letter, uppercase letter, number, and special character";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = userregistrationForm.querySelector("input[name='password']").nextElementSibling;
        feedBackel.textContent = "";
    }
    if(! (password === confirmPassword)){
        error = true;
        let feedBackel = userregistrationForm.querySelector("input[name='confirmPassword']").nextElementSibling;
        feedBackel.textContent = "Password & Confirm Password must be same";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = userregistrationForm.querySelector("input[name='confirmPassword']").nextElementSibling;
        feedBackel.textContent = "";
    }
    if(! (skills && skills.length >= 2)){
        error = true;
        let feedBackel = userregistrationForm.querySelector(".skillFeedback");
        feedBackel.textContent = "Please select atleast 2 Skills";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = userregistrationForm.querySelector(".skillFeedback");
        feedBackel.textContent = "";
    }




    if(!error){

        console.log('Form Submitted');
    }




})

let firstNameEl = userregistrationForm.querySelector("input[name='firstName']");
let lastNameEl = userregistrationForm.querySelector("input[name='lastName']");
let emailEl = userregistrationForm.querySelector("input[name='email']");
let passwordEl = userregistrationForm.querySelector("input[name='password']");
let confirmPasswordEl = userregistrationForm.querySelector("input[name='confirmPassword']");
let skillsElms = userregistrationForm.querySelectorAll("input[name='skill']")

firstNameEl.addEventListener('change', function(){
    let value = firstNameEl.value;

    if(!validateFirstName(value)){
        let feedBackel = firstNameEl.nextElementSibling;
        feedBackel.textContent = "First Name is required & must have atlease 3 Characters";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = firstNameEl.nextElementSibling;
        feedBackel.textContent = "";
    }
})
lastNameEl.addEventListener('change', function(){
    let value = lastNameEl.value;

    if(!validateLastName(value)){
        let feedBackel = lastNameEl.nextElementSibling;
        feedBackel.textContent = "Last Name is required & must have atlease 1 Characters";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = lastNameEl.nextElementSibling;
        feedBackel.textContent = "";
    }
})
emailEl.addEventListener('change', function(){
    let value = emailEl.value;

    if(!validateEmail(value)){
        let feedBackel = emailEl.nextElementSibling;
        feedBackel.textContent = "Please Enter a valid email";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = emailEl.nextElementSibling;
        feedBackel.textContent = "";
    }
})
passwordEl.addEventListener('change', function(){
    let value = passwordEl.value;
    if(!validatePassword(value)){
        let feedBackel = passwordEl.nextElementSibling;
        feedBackel.textContent = "Password must be 6 characters long and contain at least one of each: lowercase letter, uppercase letter, number, and special character";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = passwordEl.nextElementSibling;
        feedBackel.textContent = "";
    }
})
confirmPasswordEl.addEventListener('change', function(){
    let value = confirmPasswordEl.value;
    if(!(value === passwordEl.value)){
        let feedBackel = confirmPasswordEl.nextElementSibling;
        feedBackel.textContent = "Password & Confirm Password must be same";
        feedBackel.style.color = "red"
    }else{
        let feedBackel = confirmPasswordEl.nextElementSibling;
        feedBackel.textContent = "";
    }
})

skillsElms.forEach((el)=>{
    el.addEventListener('change', function(){
        let selectedSkillsElms = userregistrationForm.querySelectorAll("input[name='skill']:checked")
        let skills = Array.from(selectedSkillsElms).map((el)=>(el?.value))
        if(! (skills && skills.length >= 2)){
            let feedBackel = userregistrationForm.querySelector(".skillFeedback");
            feedBackel.textContent = "Please select atleast 2 Skills";
            feedBackel.style.color = "red"
        }else{
            let feedBackel = userregistrationForm.querySelector(".skillFeedback");
            feedBackel.textContent = "";
        }
    })
})



function validateFirstName(name){
    let trimedName =  `${name}`.trim().replace(/^[\s]+$/, " ");   
    if(FirstNamePattern.test(trimedName) && trimedName.length >= 3){
        return true
    }
    return false
}
function validateLastName(name){
    let trimedName =  `${name}`.trim().replace(/^[\s]+$/, " ");   
    if(lastNamePattern.test(trimedName) && trimedName.length >= 1){
        return true
    }
    return false
}

function validateEmail(text){
    let trimedText =  `${text}`.trim(); 
    
    if(emailPattern.test(trimedText)){
        return true
    }
    return false
}
function validatePassword(text){
    let trimedText =  `${text}`.trim();    
    if(passwordRegex.test(trimedText)){
        return true
    }
    return false
}


