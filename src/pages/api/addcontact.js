import connectDB from "../../../Middleware/db";
import Contact from "../../../Models/Contact";

connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        let contact = new Contact({
            name, email, message
        });
        let result = await contact.save();
        res.status(200).json({ success: true, result });
    }
    else {
        res.status(600).json({ success: false });
    }

}