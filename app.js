import express from 'express';
import http from 'http';
import path from 'path';


// get page
import indexRouter from './routes/index.js';
import secondRouter from './routes/second.js';
import thirdRouter from './routes/third.js';
import resultRouter from'./routes/result.js';

// main server
const app = express();
app.set('port', process.env.PORT || 3000);

// pulic static
app.use(express.static('public/stylesheets'));
app.use(express.static('public/javascripts'));

// post erased
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/second', secondRouter);
app.use('/third', thirdRouter);
app.use('/result', resultRouter);
// error
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트에서 대기 중');
});

// mbtidata
global.serverMBTI = {
    question1:-1,
    question2:-1,
    question3:-1,
    question4:-1,
    question5:-1,
    question6:-1,
    question7:-1,
    question8:-1,
    question9:-1,
    question10:-1,
    question11:-1,
    question12:-1
};

   