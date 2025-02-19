function Atm(b,w){
    if(w % 100 == 0 && b > 100){
        console.log("The balance after withdrawl is " + (b - w));
    }else if(w % 100 != 0){
        console.log("Please enter the amount in multiple of 100");
    }else{
        console.log("Insufficient balance");
    }
}
Atm(1000,250)