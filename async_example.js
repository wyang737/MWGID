function addNumber(){
    var i = 0;
    while (i < 100000){
        i = i + 1;
    }
    return i;
}

function addNumberPromise(time){
    return new Promise(res => {
        setTimeout(function (){
            res(time);
        }, time);
    });
}

async function example(){
    var num = 0
    num = addNumber();
    console.log(num);
    var num2 = addNumberPromise(2000);
    printFunc(2, num2);
    var num3 = await num2;
    printFunc(3, num3);
    var num4 = addNumberPromise(2000);
    num4.then(result => {
        printFunc(4, result);
    })
    var num5 = addNumberPromise(50);
    num5.then(result => {
        printFunc(5, result);
    })
}

function printFunc(pos, num){
    console.log(pos, ": ", num);
}

example();