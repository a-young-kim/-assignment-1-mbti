import express from 'express';
import fs from 'fs';

const router = express.Router();

//Get
router.get('/', function(req, res){
    fs.readFile('./views/result.html', function(err, data){
        if(err){
            res.send('에러');
        }
        else{
            res.writeHead(200, {'Content-Type': 'result.html'});
            res.write(data);
            res.end();
        }
    });
});

router.get('/1', function(req, res){
    yours = "";
    get_MBTI();

    res.write(yours);
    res.end();
});

const mbti_Data={
    question1:['T', 'F'],
    question2:['J', 'P'],
    question3:['S', 'N'],
    question4:['J', 'P'],
    question5:['I', 'E'],
    question6:['S', 'N'],
    question7:['N', 'S'],
    question8:['I', 'E'],
    question9:['T', 'F'],
    question10:['T', 'F'],
    question11:['E', 'I'],
    question12:['J', 'P']    
};

let mbti = {
    E:0,
    I:0,
    N:0,
    S:0,
    T:0,
    F:0,
    J:0,
    P:0
};

let yours = "";

function get_MBTI(){
    const name = 'question';

    for(let i = 1; i< 13; i++){
        let question = name+i;

        let answer = parseInt(serverMBTI[question]);
        let find = mbti_Data[question][answer-1];

        mbti[find] = mbti[find] + 1;
    }
   
    // find yours
    if(mbti.E > mbti.I) yours = yours + 'E';
    else yours = yours + 'I';

    if(mbti.S > mbti.N) yours = yours + 'S';
    else yours = yours + 'N';

    if(mbti.T > mbti.F) yours = yours + 'T';
    else yours = yours + 'F';

    if(mbti.P > mbti.J) yours = yours + 'P';
    else yours = yours + 'J';

    console.log(yours);
}
export default router;