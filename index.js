const express = require('express')
const app = express();
const port = 5000

app.get('todo', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



app.use(cors());
app.use(json());

//routes//

//create a todo

app.post("/todos", async (req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

//get a todo

//delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
