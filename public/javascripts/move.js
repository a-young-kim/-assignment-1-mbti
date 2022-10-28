

// check all question
function is_Checked(){
    
    let elements = document.getElementsByClassName('form-check-input');
    let nameOfElement = new Set();

    // check questions name
    for(let i = 0; i < elements.length; i++){
        if(elements[i]){
            nameOfElement.add(elements[i].name);
        }
    }
    
    nameOfElement = Array.from(nameOfElement);

    // check all questions answered
    for(let i = 0; i < nameOfElement.length; i++){
        // not checked
        if(window.sessionStorage.getItem(nameOfElement[i]) == null){
            alert('응답하지 않는 문항이 있습니다. 모두 응답해 주세요');
            return false;
        }
    }
    return true;
}

// change radio button
function get_Answer(event){

    if(window.sessionStorage.getItem(event.target.name) == null){
        // change process bar
        let processbar = document.getElementById('processbar');
        let valueNow = processbar.ariaValueNow;

        valueNow = parseInt(valueNow) + 100/12;
        processbar.style.width = valueNow+'%';
        processbar.ariaValueNow = valueNow;
    }

    // saved in sessionStorage
    window.sessionStorage.setItem(event.target.name, event.target.id.split('_')[1]);
}


// move back
function move_back(){
    history.back();
}

// when view change first start
window.onload = function(){
    let elements = document.getElementsByClassName('form-check-input');

    if(elements == null) return;

    let nameOfElement = new Set();

    // check questions name
    for(let i = 0; i < elements.length; i++){
        if(elements[i]){
            nameOfElement.add(elements[i].name);
        }
    }
    
    nameOfElement = Array.from(nameOfElement);

    // if data in session --> radio button checked
    for(let i = 0; i<nameOfElement.length; i++){
        let answer = window.sessionStorage.getItem(nameOfElement[i]);
        if(answer != null){
            document.getElementById(nameOfElement[i]+'_'+answer).checked = true;

            // change process bar
            let processbar = document.getElementById('processbar');
            let valueNow = processbar.ariaValueNow;

            valueNow = parseInt(valueNow) + 100/12;

            if(valueNow > 98){
                valueNow = 100;
            }
            processbar.style.width = valueNow+'%';
            processbar.ariaValueNow = valueNow;
        }
    }
};