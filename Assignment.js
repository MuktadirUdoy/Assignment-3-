

function KiloMeterToMeter(kilo) {
    var num= kilo*1000;
    return num;
}

// var result = KiloMeterToMeter(5);
// console.log(result);



function budgetcalculator(WatchQuantity,MobileQuantity,laptopQuantity) {
    var watch = WatchQuantity*50;
    var Mobile = MobileQuantity*100;
    var laptop = laptopQuantity*500;

    var result = watch + Mobile + laptop ;
    return result;
}

// var MyBudget= budgetcalculator(1,1,1);
// console.log(MyBudget);


function hotelCost(NumberOfNight) {
if (NumberOfNight <= 10) {
    Night= NumberOfNight*100;    
}
else if (NumberOfNight <=20) {
    Night= NumberOfNight*80;
}
else{
    Night= NumberOfNight*50;
}
return Night;
} 
// var Budget= hotelCost(10);
// console.log(Budget);


function megaFriend(str) {
    var wordLength = 0;
    var biggestWord;
    for (var i = 0; i < str.length; i++) {
      if (str[i].trim().length > wordLength) {
        var wordLength = str[i].length;
        biggestWord = str[i];
      }
      biggestWord=Array.from(biggestWord);
    }
    
    return biggestWord;
  }
//   console.log(megaFriend(['rahim', 'karim', 'abjamal']));


