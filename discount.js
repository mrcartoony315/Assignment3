function Discount(b){
    if(b <= 500){
        console.log("No discount for Total Bll of Rs500")
    }
    else if(b > 500 && b <= 1000){
        console.log("The Total Bill after discount is " + (b - (b * 0.1)))
    }
    else if(b > 1000 && b <= 2000){
        console.log("The Total Bill after discount is " + (b - (b * 0.2)))
    }
    else if(b > 2000){
        console.log("The Total Bill after discount is " + (b - (b * 0.3)))
    }
}
Discount(7000)