function getHome () {
    let getHome = [
        "Mansion",
        "Apartment",
        "Shack",
        "House",
    ];
    getHome.push("Dumpster");
    getHome.push(process.argv[2]);
    //console.log(getHome);
    let home = getHome[Math.floor(Math.random() * getHome.length)];
    //console.log(home);
    return home;
}
function getChildrenCount () {
    let children = Math.floor(Math.random()* 100 + 1);
    //console.log(children);
    if (Math.random < .5) {
        children = process.argv[3]
    }
    else {
        children =  Math.floor(Math.random()* 100 + 1);
    }
    return children;
}
function getCar() {
    let getCar = [
        "Lambo",
        "Convertable",
        "box with wheels",
        ];
    let car = getCar[Math.floor(Math.random() * getCar.length)];
    getCar.push(process.argv[4]);
    return car;
    //console.log(car);
 }
 function liveUntil() {
     let oldest = [
         14,
         37,
         82,
         64
     ];
     let age = oldest[Math.floor(Math.random() * oldest.length)];
     return age;
     //console.log(age);
    }


function mash() {
    return "You will live in a " + getHome() + ", you will have "
    + getChildrenCount() + " kids, you will drive a " 
    + getCar() + "and you will live until the age of " + 
    liveUntil() + "." ;
}
console.log(mash());



