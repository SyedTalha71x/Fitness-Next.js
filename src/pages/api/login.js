import connectDB from "../../../Middleware/db";
import User from "../../../Models/User";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let userinfo = await User.findOne({ "email": req.body.email });
        var bytes = CryptoJS.AES.decrypt(userinfo.password, 'DoNtRuN$6w7s');
        var decryptedcode = bytes.toString(CryptoJS.enc.Utf8);
        if (userinfo) {
            if (req.body.email === userinfo.email && req.body.password === decryptedcode) {
                var token = jwt.sign({ email: userinfo.email, name: userinfo.name }, 'DontShopgobonanza', { expiresIn: '1d' });
                res.status(200).json({ success: true, token });
            }
        }
        else {
            res.status(600).json({ success: false, message: "invalid credientials" });
        }
    }
}