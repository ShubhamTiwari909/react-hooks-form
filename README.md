1. Basic HTML form
2. Register, Handle Form Submittion, Get Values, Set Value, Watch and Reset
3. Yup validations with custom validations and regex
4. Form states - Mode, Errors with input borders colors, Touched Fields, 
                 Dirty Fields, Valid Form, Submitting, Submitted, Submit Successful
5. Nested Data with nested error validation
6. Dependent input fields and disabled fields
7. Passwords and confirm passwords comparison
8. Arrays of inputs


CODE SNIPPETS - 


SUBMIT METHOD
const submithHandler = values => console.log(values)


AGE
let dob = new Date(getValues("dob"));

let age = Math.floor((Date.now() - dob) / (31557600000))


Regex password
 /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
"Password not strong"

(1 uppercase, 1 lowercase, 1 number and 1 special character)

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email format"),
    age: Yup.number().positive().integer().required("Age is required").typeError("Age must be a number"),
    dob: Yup.date().required("DOB is required").typeError("DOB must be a date"),
    password: Yup.string().required("Password is required")
    confirmPassword: Yup.string().required("Confirm Password is required")
})