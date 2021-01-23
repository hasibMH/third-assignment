//https://github.com/hasibMH/third-assignment

//1
function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}


//2
function budgetCalculator (watch, phone, laptop){
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}


//3
function hotelCost (days){
var cost = 0;
if (days<=10){
    cost = days * 100;
}
else if (days<=20){
    var days10 = 10 * 100;
    var remaining= days - 10;
    var days20 = remaining * 80;
    cost= days10 + days20;
}
else{
    var days10 = 10 * 100;
    var days20 = 10 * 80;
    var remaining = days - 20;
    var daysmorethan20 = remaining * 50;
    cost = days10 + days20 + daysmorethan20;
}
return cost;
}


//4
function megaFriend(name){
    var max= name[0].length;
    var meganame= name[0];
    for(var i=1; i< name.length; i++){
        var mega= name[i].length;
        if(mega>max){
            meganame= name[i];
            max= mega;
        }
    }
    return meganame;
}
