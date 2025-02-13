function CabFare(d){
    if(d > 0 && d <= 5 ){
        console.log("The Total Fare is Rs" + d * 10);
    }
    else if(d > 6 && d <= 10){
        console.log("The Total Fare is Rs" + d * 8);
    }
    else if(d >= 11){
        console.log("The Total Fare is Rs" + d *5);
    }
}
CabFare(8)