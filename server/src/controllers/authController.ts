import { authService } from '../services/authService';
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
    const { email, username, password } = req.body;
    
    try {
        const result = await authService.register(email, username, password);
        if (result.success) {
        return res.status(201).json({ message: result.message });
        } else {
        return res.status(400).json({ message: result.message });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." });
    }
}

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    try {
        const result = await authService.login(username, password);
        if (result.success) {
            return res.status(200).json({ message: result.message });
        } else {
            return res.status(401).json({ message: result.message });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." });
    }
}