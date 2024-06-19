const kodamList = [
  "sikat wc",
  "macan",
  "kyubi",
  "naga",
  "monyet",
  "macan putih",
  "macan sumatra",
  "singa",
  "kingkong",
  "beruang",
  "masha and the bear",
  "boboiboy solar",
  "boboiboy api",
  "boboiboy topan",
  "boboiboy halilitar",
  "boboiboy daun",
  "boboiboy ice",
  "boboiboy gempa",
  "pororo",
  "anjing",
  "kucing",
  "babi",
  "kosong",
  "sapu",
  "pel",
];

document.getElementById("cekButton").addEventListener("click", cekKodam);
document.getElementById("name").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    cekKodam();
  }
});

function cekKodam() {
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Masukkan nama Anda!");
    return;
  }
  const randomKodam = kodamList[Math.floor(Math.random() * kodamList.length)];
  document.getElementById("result").textContent = `Kodam Anda: ${randomKodam}`;
}
