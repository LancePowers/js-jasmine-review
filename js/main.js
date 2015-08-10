function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function byTwo(start,stop){
  var array =[];
  for (var i = start; i < stop; i+=2) {array.push(i);}
  return array;
}

function evenForty(num){
  if(num < 40){
    return num;
  } else {
    return byTwo(40,num);
  }
}

function oddFortyCount(num){
  if(num < 40){
    var array = [];
    for (var i = 40; i > num; i--) {
      array.push(i);
    }
    return array;
  } else {
    return byTwo(41,num);
  }
}

function addDigits(num,max){
  var numString = num.toString();
  var newNum = 0;
  for (var i = 0; i < numString.length; i++) {
    var nextDigit = parseInt(numString[i])
    if(newNum + nextDigit < max) {
      newNum += nextDigit;
    }
  }
  return newNum;
}

function summedDigits(num,max) {
  if(max === undefined){max = 36};
  if(num>0 && num<10000){
    return addDigits(num,max);
  } else {
    return 'invalid number';
  }// body...
}

function smallestDenom(num1,num2){
  if(zeroToHundred(num1) && zeroToHundred(num2)){
    for (var i = 2; i < smallest(num1,num2); i++) {
      if(num1%i === 0 && num2%i === 0){
        return i;
      }
    }
    return 'sorry';
  } else {
    return 'invalid number';
  }

}

function smallest(num1,num2){
  if(num1<num2){return num1;}
  else {return num2;}
}

function zeroToHundred(num){
  if (num > 100 || num < 1){return false;}
  else {return true;}
}

function smallestMultiple(num1,num2){
  if(zeroToHundred(num1) && zeroToHundred(num2)){
    var localNum1 = num1;
    var localNum2 = num2;
    while(localNum1 !== localNum2){
      if(localNum1 < localNum2){
        localNum1 += num1;
      } else {
        localNum2 += num2;
      }
    }
    return localNum2;
  } else {return 'invalid number'}
}

function average(num1,num2){
  var total = num1 + num2;
  var average = total/2;
  var deviation = Math.abs(num1-average);
  return [average,deviation];
}

module.exports = {
  largestNumber: largestNumber,
  byTwo: byTwo,
  evenForty: evenForty,
  oddFortyCount: oddFortyCount,
  summedDigits: summedDigits,
  smallestDenom: smallestDenom,
  smallestMultiple: smallestMultiple,
  average: average
};
