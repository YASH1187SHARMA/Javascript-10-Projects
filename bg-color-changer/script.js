const getcolor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const creteNumber = "#" + randomNumber.toString(16);
  console.log(creteNumber);

  document.body.style.backgroundColor = creteNumber;

  document.getElementById("color-code").innerText = creteNumber;
};

document.getElementById("btn").addEventListener("click", getcolor);
