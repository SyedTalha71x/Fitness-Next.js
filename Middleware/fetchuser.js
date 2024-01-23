import jwt from 'jsonwebtoken';

export default function fetchuser(req, res, next) {
    const token = req.headers('token');
    if (!token) {
        res.status(600).json({ error: "Please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, 'DontShopgobonanza');
        req.user = data.user;
        next();

    }
    catch (error) {
        res.status(600).json({ error: "Please authenticate using valid token !!!!" });
    }



}