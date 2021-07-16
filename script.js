function compute() {
    var check_amount = document.getElementById("principal"); 
    if (check_amount.value <= 0)    //Checking the value is positive or not 
    {
        alert("Please Enter a positive number!");
        return false;
    }
    else {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        var amount = document.getElementById("result").innerHTML = "\<br\>If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
        var check_amount = document.getElementById("principal");

    }

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
