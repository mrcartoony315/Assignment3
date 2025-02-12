function ElectricityBill(bill){
  var unit = 260;
  var unit1 = 60;
  var unit2 = 100;
  var unit3 = 50;
  var unit4 = 50;
  var rate1 = 2.5;
  var rate2 = 4;
  var rate3 = 6;
  var rate4 = 8;
  var bill;
  if (unit >= 260){
    var bill1 = unit1 * rate4;
  } 
  if (unit2 >= 100 && unit2 <= 200){
    var bill2 = unit2 * rate3;
  }
  if (unit3 >= 50 && unit3 <= 100){
    var bill3 = unit3 * rate2;
  }
  if (unit4 <= 50){
    var bill4 = unit4 * rate1;
  }
  bill = bill1 + bill2 + bill3 + bill4;
  console.log("Your bill is: " + bill);
} 
ElectricityBill();