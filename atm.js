function Atm(b,w){
    if(w % 100 == 0){
        console.log("The balance after withdrawl is " + (b - w));
    }
}
Atm(5000,200)