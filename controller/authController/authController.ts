import {Request, Response} from 'express';

const registerUser = async (req: Request, res: Response) => {
    const {username, email, password, workingExperience} = req.body;
    
}