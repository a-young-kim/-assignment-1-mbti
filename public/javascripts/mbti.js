
// when view change first start
function set_MBTI(data){
    // find view
    let First = document.getElementById('wFirst');
    let Second = document.getElementById('wSecond');
    let Third = document.getElementById('wThird');
    let Fourth = document.getElementById('wFourth');

    // create textNode
    const content1 = document.createTextNode(data.charAt(0));
    const content2 = document.createTextNode(data.charAt(1));
    const content3 = document.createTextNode(data.charAt(2));
    const content4 = document.createTextNode(data.charAt(3));

    // push view
    First.appendChild(content1);
    Second.appendChild(content2);
    Third.appendChild(content3);
    Fourth.appendChild(content4);

    // get yours url
    your_url = your_url + data;
}

const url = 'http://localhost:3000/result/1';
let your_url = "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-";

window.onload = function(){
    // get mbti data in result/1
    fetch(url)
    .then(response => response.text())
    .then(data => set_MBTI(data));
};

// move back
function move_back(){
    history.back();
}

// open mbtiInfo using new page
function getInfo(){
    window.open(your_url, target="_blank");
}