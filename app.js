const express = require("express");

const cors = require("cors");
const port = 5050;

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1", require("./routes/auth-routes"));


app.listen(port, async () => {
    try {
        return console.log(`Server is listening on ${port}`);
    } catch (err) {
        console.log(err);
        return console.error(`Server error (on ${port})`);
    }
});
