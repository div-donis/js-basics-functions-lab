// Code your solution in this file!
function distanceFromHqInBlocks(num){
   const result = Math.abs(num - 42);
   return result;
}

function distanceFromHqInFeet(num){
    const result1 = (Math.abs(num - 42) * 264);
    return result1;
}

function distanceTravelledInFeet(num, num2){
    const result2 = (Math.abs(num - num2) * 264);
    return result2;
}
function calculatesFarePrice(start, destination){
    const result3 = (Math.abs(start - destination) * 264);
    if (result3 < 400){
        return 0;
    }
    if (result3 >= 400, result3 <= 2000) {
        return (result3 - 400) * 0.02;
    }
    if (result3 > 2000, result3 <= 2500) {
        return 25;
    }
    if (result3 > 2500){
        return 'cannot travel that far';
    }
}