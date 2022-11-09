#### API for Register new user:--

- API to register register user is : http://localhost:8080/user/auth/register
- Request Body will take :
  body:{
  name:{type:String, required:true, uneque:true},
  email:{type:String, required:true, uneque:true},
  password:{type:String, required:true, minlength: 6},
  age:{type:Number}
  }

#### API for Login user:--

- API to login the user is : http://localhost:8080/user/auth/login
- Request Body will take :
  body:{
  email: String,
  password: String
  }
