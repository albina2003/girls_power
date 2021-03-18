const express = require('express');
const app = express();
const port = 3000;

// Setting up the public directory
app.use(express.static('public'));

app.use(express.static("resources/teamphoto.jpg" + '/about/team_photo'));
app.use(express.static("" + '/video'));

app.get("/about/team_photo", (req, res)=>{
    res.redirect("/resources/teamphoto.jpg");
})

app.get("/video", (req, res)=>{
    res.redirect("https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps");
})

app.listen(port, () => console.log(`listening on port ${port}!`));