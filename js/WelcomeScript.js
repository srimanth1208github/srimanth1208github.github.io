function printWelcomeNext(input){
    //console.log("entering ","method ","printWelcomeNext()");
    var car = {"name":"mustang","color":"black"};
    document.getElementById(input).innerHTML = "srimanth rocks!! and his "+car.color+" "+car.name;
    return;
}

function printWelcomeBack(input){
    //console.log("entering ","method ","printWelcomeBack()");
    document.getElementById(input).innerHTML = "Still srimanth rocks!!";
    return;
}