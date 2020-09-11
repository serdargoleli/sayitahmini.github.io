var small_number = document.getElementById("small_number");
var big_number = document.getElementById("big_number");
var kalan_hak = document.getElementById("kalan_hak");
var input = document.getElementById("input");
var btn_tahmin_et = document.getElementById("tahmit_et");
var hak;
var rnd = Math.floor(Math.random() * 1000 + 1);

function start() {
  hak = 10;
  rnd = Math.floor(Math.random() * 1000 + 1);
  kalan_hak.innerText = hak;
  small_number.innerText = "0";
  big_number.innerText = "1000";
  btn_tahmin_et.disabled = false;
  kalan_hak.style.color = "green";
  input.value = "";
  input.focus();
}

function tahmin_et() {
  var tahmin = input.value;
  if (!(tahmin == "" || tahmin == null) && tahmin >= 0 && tahmin <= 1000) {
    if (hak > 1) {
      if (rnd == tahmin) {
        alert("Tebrikler Bildiniz...");
        btn_tahmin_et.disabled = true;
      }
      if (rnd > tahmin) {
        small_number.innerText = tahmin;
      }
      if (rnd < tahmin) {
        big_number.innerText = tahmin;
      }
    } else if (hak == 1) {
      if (rnd == tahmin) {
        alert("Tebrikler Bildiniz...");
        btn_tahmin_et.disabled = true;
      } else {
        alert("Hakkınız Bitmiştir. Sayı " + rnd + " Olmalıydı :)");
        btn_tahmin_et.disabled = true;
      }
    }

    if (hak > 5) {
      kalan_hak.style.color = "green";
    } else {
      kalan_hak.style.color = "red";
    }
    input.value = "";
    input.focus();

    console.log(hak);
    console.log(rnd);

    hak--;
    kalan_hak.innerText = hak;
  } else {
    alert("Lütfen Geçerli Bir Sayı Giriniz...");
  }
}
