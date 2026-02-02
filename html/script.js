document.getElementById("akanForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // Validation
  if (!day || !month || !year || !gender) {
    alert("Please fill in all fields.");
    return;
  }

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Invalid day or month.");
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  let d =
    Math.floor(
      (4 * CC - 2 * CC - 1) +
      (5 * YY / 4) +
      (26 * (MM + 1) / 10) +
      DD
    ) % 7;

    

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  const akanName =
    gender === "male" ? maleNames[d] : femaleNames[d];

  document.getElementById("result").textContent =
    `You were born on a ${days[d]} and your Akan name is ${akanName}.`;

  document.getElementById("akanForm").reset();
});
