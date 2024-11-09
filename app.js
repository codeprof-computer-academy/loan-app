// logic for navbar
// target the menu btn
const menu_btn = document.querySelector(".menu-btn")
// add click event listener to it
menu_btn.addEventListener("click", show_nav)

// define the show_nav function
function show_nav(){
    //  target the nav
    const nav_bar = document.querySelector("nav")
    // add the show-nav class to the navbar
    nav_bar.classList.toggle("show-nav")

    // change the bg of the menu btn
    menu_btn.classList.toggle("close-bg")
}


// target the form
const loan_form = document.querySelector(".loan-form")

// listen for a submit event
loan_form.addEventListener("submit", calculate_loan)

// build the calculate loan function
function calculate_loan(event){
    event.preventDefault() // to stop the submit event from reloading the page
  
    // grab the user loan amount
    let loan_amount = Number(document.querySelector(".loan-amount").value)
    let loan_duration =  Number(document.querySelector(".duration").value)
    let rate = 0.2

    // calculate the interest
    let loan_interest = (loan_amount * loan_duration * rate ) / 12
    let total_payment = loan_amount + loan_interest
    
    // display the result using the innerHTML
    document.querySelector(".interest").innerHTML = loan_interest.toFixed(2)
    document.querySelector(".amount").innerHTML = total_payment.toFixed(2)

}


// logic to reset

// target the clear btn
const clear_btn = document.querySelector(".clear-btn")

// add click event listener to it
clear_btn.addEventListener("click", clear_app)

function clear_app(){
      document.querySelector(".interest").innerHTML = "0.0"
    document.querySelector(".amount").innerHTML = "0.0"
}


