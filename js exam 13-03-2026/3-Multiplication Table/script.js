document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = Number(document.getElementById("num").value);

  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += num + "*" + i + "=" + num * i + "           ";
  }
  document.getElementById("result").innerHTML =
    "Multiplication Table: " + result;
});
