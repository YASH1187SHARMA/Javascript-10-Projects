let qrtext = document.getElementById("qrtext");
let boxImage = document.getElementById("boxImage");
let qrImage = document.getElementById("qrImage");
let btn = document.getElementById("btn");

function QRgenerator() {
  if (qrtext.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    box - image.classList.add("img-show");
  } else {
    qrtext.classList.add("error"); // Add class for a purpose of Animation.
    setTimeout(() => {
      qrtext.classList.remove("error");
    }, 1000);
  }
}

btn.addEventListener("click", QRgenerator);