import express from 'express';

// get page
import indexRouter from './routes/index.js';
import secondRouter from './routes/second.js';
import thirdRouter from './routes/third.js';
// main server
const app = express();
app.set('port', process.env.PORT || 3000);

// css file
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/second', secondRouter);
app.use('/third', thirdRouter);

// error
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트에서 대기 중');
});
   