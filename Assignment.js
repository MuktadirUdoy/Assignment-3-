

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


function hotelNight(num){
    if(num <=10){
        var night=num*100;
    }
    else if(num <=20){
        var firstSlot= 10*100;
        var remaining= num - 10;
            var secondSlot= remaining*80;
        night= firstSlot+secondSlot;
        }
        else{
            var firstSlot = 10*100;
        var secondSlot= 10*80;
        var remaining= num - 20;
        var thirdSlot = remaining*50;
        night= firstSlot+secondSlot+thirdSlot;
        }
        return night;
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


