export const Register = (req,res)=>{
    console.log(req.body)
    res.json({ok:"register"})
};

export const Login = (req,res)=>{
    console.log(req.body)
    res.json({ok:"login"})}