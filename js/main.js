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
    return byTwo(40,num);
  } else {
    return num;
  }
}
module.exports = {
  largestNumber: largestNumber,
  byTwo: byTwo,
  evenForty: evenForty
};
