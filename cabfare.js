function CabFare(d){
    if(d > 0 && d <= 5 ){
        var d1 = d * 10;
        var total = d1;
    }
    else if(d > 6 && d <= 10){
        var d1 = 5 * 10;
        var d2 = (d - 5) * 8;
        var total = d1 + d2;
    }
    else if(d >= 11){
        var d1 = 5 * 10;
        var d2 = 5 * 8;
        var d3 = (d - 10) * 6;
        var total = d1 + d2 + d3;
    }
    console.log("The fare is: " + total);
}
CabFare(10)