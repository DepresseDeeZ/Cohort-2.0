const z = require('zod');
// if the input is an array of numbers with atleast 1 input , the function should return true, else false
function validateInput(arr){
    const schema = z.array(z.number());
    const response = schema.safeParse(arr);
    console.log(response);
}
// validateInput([1,2,3,4,5,"435"]);

/*
email => string => shopuld llok liek email
password => string => should be atleast 8 characters long
*/
function validateUser(user){
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    });
    const response = schema.safeParse(user);
    console.log(response);
}
// validateUser([1,2,3,4,5]);
validateUser({
    email: "umangraval0365@gmail.com",
    password: "12345679"
})
