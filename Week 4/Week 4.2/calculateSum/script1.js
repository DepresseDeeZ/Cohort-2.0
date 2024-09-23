function populateDivPrint() {
  // this will print the hello when on click
  const el = document.getElementById("finalSum");
  console.log(el);
  el.innerHTML = "hello";
}

async function populateDiv() {
  // addition of two number in browser
  const a = parseInt(document.getElementById("f1").value);
  const b = parseInt(document.getElementById("f2").value);
  const el = document.getElementById("finalSum");
  //using variable to sum it 
  // el.innerHTML = a+b;

  //using fetch to calcualte using fetch method
  const response = await fetch("http://localhost:8080/sum?a=" + a + "&b=" + b);
  const data  = await response.text();
  console.log(typeof data)
  el.innerHTML = data
}
