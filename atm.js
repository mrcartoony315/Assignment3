function Atm(b,w){
    if(w == 100 || w == 200 || w == 500 || w == 2000){
        console.log("The balance after withdrawl is " + (b - w));
    }else{
        console.log("Invalid amount");
    }
}
Atm(5000,200)