const fs = require('node:fs');


export default async function handler(req, res) {

    fs.readFile(`jsondata/${req.query.slug}.json`, "utf8", (err, data) => {
        if (err) {
            res.status(600).json({ err: "no blog found" });
        }
        else {
            console.log(data);
            res.status(200).json({ success: true });
        }

    })

}