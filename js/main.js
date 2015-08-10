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

function summedDigits(num){
  var numString = num.toString();
  var newNum = 0;
  if(num>0 && num<10000){
    for (var i = 0; i < numString.length; i++) {
      debugger;
      newNum += parseInt(numString[i]);
    }
    return newNum;
  } else {
    return 'invalid number';
  }
}


module.exports = {
  largestNumber: largestNumber,
  byTwo: byTwo,
  evenForty: evenForty,
  oddFortyCount: oddFortyCount,
  summedDigits: summedDigits
};
