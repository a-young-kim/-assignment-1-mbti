import express from 'express';
import fs from 'fs';

const router = express.Router();

//Get
router.get('/', function(req, res){
    fs.readFile('./views/second.html', function(err, data){
        if(err){
            res.send('에러');
        }
        else{
            res.writeHead(200, {'Content-Type': 'second.html'});
            res.write(data);
            res.end();
        }
    });
});

// post : answer of 5~8 questions 
router.post('/', function(req, res){
    let body = req.body;
    
    serverMBTI.question5 = body.question5.split('_')[1];
    serverMBTI.question6 = body.question6.split('_')[1];
    serverMBTI.question7 = body.question7.split('_')[1];
    serverMBTI.question8 = body.question8.split('_')[1];


    res.redirect("third");
});

export default router;