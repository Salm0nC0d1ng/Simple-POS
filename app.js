total = [];

function totalPrice() {
    total.length = 0;
    var qp = document.getElementById("qp").value;
    total.push(qp * 80);
    var dqp = document.getElementById("dqp").value;
    total.push(dqp * 120);
    var cdb = document.getElementById("cdb").value;
    total.push(cdb * 85);
    var bcb = document.getElementById("bcb").value;
    total.push(bcb * 90);
    sum = total.reduce((partialSum, a) => partialSum + a, 0);
    alert("Total Price is " + sum);
}

function payMoney() {
    total.length = 0;
    var qp = document.getElementById("qp").value;
    total.push(qp * 80);
    var dqp = document.getElementById("dqp").value;
    total.push(dqp * 120);
    var cdb = document.getElementById("cdb").value;
    total.push(cdb * 85);
    var bcb = document.getElementById("bcb").value;
    total.push(bcb * 90);
    sum = total.reduce((partialSum, a) => partialSum + a, 0);

    pay = document.getElementById("cash").value;

    if (sum > pay) {
        alert("Not Enough Cash Money!");
    } else {
        var change = pay - sum;
        alert("Thank you for purchasing! Here is your change: " + change);
    }
}
