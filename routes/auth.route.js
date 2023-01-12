import Express from "express";
import { Login, Register } from "../controllers/auth.controllers.js";
import {body} from "express-validator"
import { validatorResult } from "../middlewares/validatorResult.js";

const router = Express.Router();

router.post('/login',[
    body('email',"formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
    body('password','minimo 6 caracteres')
    .trim()
    .isLength({min:6}),
],Login)
router.post('/register',[
    body('email',"formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
    body('password','minimo 6 caracteres')
    .trim()
    .isLength({min:6}),
    // body('repassword',"me jode el custom").custom(
    //     (value , { req }) => {
    //     if(value !== req.body.password){
    //         throw new Error("no coinciden las contraseñas")
    //     }
    // }),
    body('confirmedPassword')
    .exists({checkFalsy: true}).withMessage('tenes que confirmar password')
    .custom((value, {req}) => value === req.body.password).withMessage("las password no coinciden"),
],
validatorResult,
Register)

export default router;