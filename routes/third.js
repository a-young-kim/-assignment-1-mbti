import express from 'express';
import fs from 'fs';

const router = express.Router();

//Get
router.get('/', function(req, res){
    fs.readFile('./views/third.html', function(err, data){
        if(err){
            res.send('에러');
        }
        else{
            res.writeHead(200, {'Content-Type': 'third.html'});
            res.write(data);
            res.end();
        }
    });
});

// post : answer of 9~12 questions 
router.post('/', function(req, res){
    let body = req.body;

    serverMBTI.question9 = body.question9.split('_')[1];
    serverMBTI.question10 = body.question10.split('_')[1];
    serverMBTI.question11 = body.question11.split('_')[1];
    serverMBTI.question12 = body.question12.split('_')[1];

    res.redirect("result");
});

export default router;