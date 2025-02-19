// function ElectricityBill(bill){
//   var unit = 260;
//   var unit1 = 60;
//   var unit2 = 100;
//   var unit3 = 50;
//   var unit4 = 50;
//   var rate1 = 2.5;
//   var rate2 = 4;
//   var rate3 = 6;
//   var rate4 = 8;
//   var bill;
//   if (unit >= 260){
//     var bill1 = unit1 * rate4;
//   } 
//   if (unit2 >= 100 && unit2 <= 200){
//     var bill2 = unit2 * rate3;
//   }
//   if (unit3 >= 50 && unit3 <= 100){
//     var bill3 = unit3 * rate2;
//   }
//   if (unit4 <= 50){
//     var bill4 = unit4 * rate1;
//   }
//   bill = bill1 + bill2 + bill3 + bill4;
//   console.log("Your bill is: " + bill);
// } 
// ElectricityBill();

// function Bill(unit){
//   if(unit > 0 && unit <=50){
//       var slab1 = unit * 2.5;
//       return slab1;
//   }
//   else if(unit > 50 && unit <= 100){
//       var slab2 =  ((unit-50) * 4) + slab1;
//       return slab2;
//   }
//    else if(unit > 100 && unit <= 200){
//       var slab3 = ((unit-100) *6) + slab1 + slab2;
//       return slab3;
//   }
//   else if(unit >200){
//       var slab4 = ((unit-200) * 8) + slab1 + slab2 + slab3;
//       return slab4;
//       var slab4 = total;
//   }
//   return total;
// }

// console.log(Bill(260));



function Bill(unit) {

  if (unit > 0 && unit <= 50) {
      slab1 = unit * 2.5;
      var bill = slab1;
  } 
  else if (unit > 50 && unit <= 100) {
      slab1 = 50 * 2.5; 
      slab2 = (unit - 50) * 4; 
      bill = slab1 + slab2;
  } 
  else if (unit > 100 && unit <= 200) {
      slab1 = 50 * 2.5; 
      slab2 = 50 * 4;
      slab3 = (unit - 100) * 6; 
      bill = slab1 + slab2 + slab3;
  } 
  else if (unit > 200) {
      slab1 = 50 * 2.5;
      slab2 = 50 * 4;
      slab3 = 100 * 6;
      slab4 = (unit - 200) * 8; 
      bill = slab1 + slab2 + slab3 + slab4;
  }
  console.log("Your bill is: " + bill);
}

Bill(60); 