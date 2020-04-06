function main(){
    console.log(" executing main() ");
    //typeofAndInstanceOf();
    //twoEquals_ThreeEquals();
    //undefinedDemo();
    doLoops();

}

//arrays and loops
function doLoops(){
    var array = [1,2,3,4,5];
    //console.log("entering method doLoops()","and also ",array);
    /*
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        
    }*/
    /*
    array.forEach((element,i,nums) => {
        this.document.getElementById("demo").innerHTML = "Hello JavaScript"+nums;
    },window);*/

    var car = {name:"mustang",color:"black",year:2006,
    searchString : function(){
              return ""+this.name+this.color+this.year;
    }};

    for (const key in car) {
        if (car.hasOwnProperty(key)) {
            const element = car[key];
            console.log(key+" --> "+element);
            
        }
    }
    console.log(car.searchString);
}

//undefined for variable thats not initialized
function undefinedDemo(){
    var temp;
    console.log(temp);
}

//typeof and instanceof
function typeofAndInstanceOf(){
    var x = 3;
    var str = "three";
    var obj = [1,2,3,4];
    console.log("typeof "+x+" is: "+typeof x);
    console.log("typeof "+str+" is: "+typeof str);
    console.log("typeof obj is: "+typeof obj);
    if(obj instanceof Array) console.log(obj+" is instanceof Array");
}
//difference betweem == and ===
function twoEquals_ThreeEquals(){
    var x = 3;
    var text = "3";
    if(x == text){
        console.log(x+"=="+text+" is true");
    }
    if(x === text){
        console.log(x+"==="+text+" is false");
    }
    else{
        console.log(x+"==="+text+" is false");
    }

}