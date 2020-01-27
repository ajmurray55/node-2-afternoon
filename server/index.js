const express = require('express');
const app = express();
app.use(express.json());

app.use(express.static(__dirname + '/../public/build'));
// const mc = require('./controllers/messages_controller')

const ctrl = require('./controllers/messages_controller')
// console.log(ctrl)


const port = 3001;

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, ctrl.create);

app.get(messagesBaseUrl, ctrl.read);

app.put(`${messagesBaseUrl}/:id`, ctrl.update);

app.delete(`${messagesBaseUrl}/:id`, ctrl.delete);



app.listen(port, () => console.log(`YO! You are now on port ${port}`));