// register jwt strategy
import { Request, Response } from 'express'
import { admin } from '../config/firebase'

const signupWithEmailAndPassword = async (req: Request, res: Response) => {
    // @ts-ignore
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ auth: false })

    try {
        const response = await admin.auth().createUser({
            email: email,
            password: password,
            emailVerified: false,
            disabled: false
        })

        return res.json(response)

    } catch (error) {
        return res.status(400).json({ auth: false, msg: "failed incorrect credentials" })
    }

}

const loginWithEmailAndPassword = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ auth: false })

    try {
        const response = await admin.auth().
        return res.json(response)

    } catch (error) {
        return res.status(400).json({ auth: false, msg: "failed incorrect credentials" })
    }

}


export { signupWithEmailAndPassword, loginWithEmailAndPassword }