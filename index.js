// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    if (pickUp < 42){
        return parseInt(42 - pickUp);
    } else {
        return pickUp - 42;
    }
};

function distanceFromHqInFeet(pickUp){
    return distanceFromHqInBlocks(pickUp) * 264;

};

function distanceTravelledInFeet(pickUp, destination){
    if (pickUp > destination){
        return (pickUp - destination) * 264;
    } else {
        return (destination - pickUp) * 264;
    }

};

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;


    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;


    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25;


    } else if(distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far"
    }
};
console.log(calculatesFarePrice(34, 32));