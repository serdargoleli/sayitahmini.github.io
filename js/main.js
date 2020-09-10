var small_number = document.getElementById("small_number");
var big_number = document.getElementById("big_number");
var kalan_hak = document.getElementById("kalan_hak");
var input = document.getElementById("input");
var btn_tahmin_et = document.getElementById("tahmit_et");
var hak = 10;
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
}

function tahmin_et() {
  var tahmin = input.value;
  if (!(tahmin == "" || tahmin == null) && tahmin >= 0 && tahmin <= 1000) {
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

    if (hak > 5) {
      kalan_hak.style.color = "green";
    } else {
      kalan_hak.style.color = "red";
    }
    hak--;
    kalan_hak.innerText = hak;
    if (hak == 0) {
      alert("Hakkınız Bitmiştir. Sayı "+ rnd +" Olmalıydı :)" );
      btn_tahmin_et.disabled = true;
      input.value = "";
    }
    input.value="";
  } else {
    alert("Lütfen Geçerli Bir Sayı Giriniz...");
  }
}
