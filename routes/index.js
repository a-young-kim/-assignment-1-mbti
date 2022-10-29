import express from 'express';
import fs from 'fs';

const router = express.Router();

// get
router.get('/', function(req, res){
    fs.readFile('./views/index.html', function(err, data){
        if(err){
            res.send('에러');
        }
        else{
            res.writeHead(200, {'Content-Type': 'index.html'});
            res.write(data);
            res.end();
        }
    });
});


// post : answer of 1~4 questions 
router.post('/', function(req, res){    
    let body = req.body;
   
    serverMBTI.question1 = body.question1.split('_')[1];
    serverMBTI.question2 = body.question2.split('_')[1];
    serverMBTI.question3 = body.question3.split('_')[1];
    serverMBTI.question4 = body.question4.split('_')[1];

    res.redirect("second");
});

export default router;