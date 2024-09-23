async function checkInterest() {
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseInt(document.getElementById("rate").value);
    var time = parseInt(document.getElementById("time").value);

    var response = await fetch(`http://localhost:8080/interest?principal=${principal}&rate=${rate}&time=${time}`);

    var data =  await response.json();

    console.log(data)
    var interest = document.getElementById("interest");
    var total = document.getElementById("total");

    interest.innerHTML =`<h5> Interest is :  ${data.interest}</h5>`
    total.innerHTML = `<h5> Total is : ${data.total} </h5>`
}