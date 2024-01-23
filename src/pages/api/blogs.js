const fs = require('node:fs');


export default async function handler(req, res) {
    let blog = await fs.promises.readdir("jsondata");
    let myfile;
    let allblogs = [];
    for (let i = 0; i < blog.length; i++) {
        const data = blog[i];
        myfile = await fs.promises.readFile(("jsondata/" + data), 'utf8');
        allblogs.push(JSON.parse(myfile));
    }
    res.status(200).json({ success: true, allblogs })

}