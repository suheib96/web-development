function plus(a,b){
    return a+b;
}

function mal(a,b){
    return a*b;
}

function geteilt(a,b){
    if(b==0){
        return "Mathematisch nicht erlaubt";
    }else{
        return a/b;
    }
}

function minus(a,b){
    return a-b;
}

function randomNumber(){
    return Math.floor(Math.random()*10)+1; // 0-9
}

module.exports = {plus, mal, geteilt, minus, randomNumber}