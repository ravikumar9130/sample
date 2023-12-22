async function callApi1() {
  const str1 = prompt("Enter the first string:");
  const str2 = prompt("Enter the second string:");

  const response = await fetch(`http://localhost:3000/api1?str1=${str1}&str2=${str2}`);
  const result = await response.text();

  document.getElementById("result").innerText = result;
}

async function callApi2() {
  const num1 = prompt("Enter the first number:");
  const num2 = prompt("Enter the second number:");
  const num3 = prompt("Enter the third number:");

  const response = await fetch('http://localhost:3000/api2', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1, num2, num3 }),
  });

  const result = await response.json();

  document.getElementById("result").innerText = result.result;
}
