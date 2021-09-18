const name1 = document.getElementById('name');
const age = document.getElementById("age");
const phone = document.getElementById("contact");
const submit = document.getElementById("btn");
let validname;
let validPhone;
name1.addEventListener( 'blur', ()=>{
    let regex = /^[a-zA-Z\s]{5,15}$/;
    let str = name1.value;
    if (regex.test(str)) {
        console.log("Your name is valid");
        validname = true
    }
    else {
        console.log("Your name is not valid");
        alert("Your name must be 5-15 characters long and should not start with a number");
        validname = false
    }
})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone number is valid");
        validPhone = true;
    }
    else {
        console.log("Your phone number is not valid");
        alert("Your phone number must be 10 digit long");
        validPhone = false;
    }
})

function check() {
    if(validPhone && validname){
        alert(`Your from submitted successfully!!<br>Our trainer will contact in you in next 24 hours.`);
    }
    else{
        alert("please enter the details correctly!!");
    }
}
