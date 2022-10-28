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
    console.log(body);
    
    res.redirect("second");
});

export default router;