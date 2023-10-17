// select Events (inputs & button)
const form = document.querySelector("#form")
let userName = document.querySelector("#username")
let password = document.querySelector("#password")
let confirmBtn = document.querySelector("#confirmBtn")




// When the form is submitted:
// Along with an event, it takes a function

form.addEventListener("submit", (e) => {
    // Prevent page refresh
    e.preventDefault()

    // Calling the input check function
    checkInput()
})


// This function checks the inputs

const checkInput = () => {
    // Variables to remove blank spaces in input
    const userNameValue = userName.value.trim()
    const passwordValue = password.value.trim()

    // Operations and conditions for username
    if (userNameValue === "") {
        setError(userName, "Enter the username")
    } else if (userNameValue.length < 4) {
        setError(userName, "Username must be at least 4 characters.")
    } else {
        setSuccess(userName)
    }

    // Operations and conditions for passwords
    if (passwordValue === "") {
        setError(password, "Enter the password")
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters.")
    } else {
        setSuccess(password)
    }
}


// If we want to add an error on the page,
// this function will set it and show us the corresponding error:

const setError = (input, message) => {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    formControl.className = "form-control error"
    small.innerText = message
}


// When all operations and commands of the previous functions are correct
const setSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}