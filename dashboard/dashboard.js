var urlParams = new URLSearchParams(window.location.search);
var receivedData = urlParams.get("data");
if (receivedData) {
  var hideBtn = document.getElementById("hide-btn");
  var emailElement = document.getElementById("email");
  hideBtn.style.display = "none";
  emailElement.innerHTML = receivedData;
}
var myads= document.getElementById('Myads')
myads.addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "../myads/myads.html";
})
let r = document.getElementById("g");
r.addEventListener("click", function () {
  window.location.href = "../postAds/postAds.html";
});
renderAds();
import { getAds } from "../config/firebase.js";
async function renderAds() {
  const allProducts = await getAds();
  console.log(allProducts);
  const mainContainer = document.getElementById("card-main");
  mainContainer.className = "card-main-container";
  for (var i = 0; i < allProducts.length; i++) {
    var content = document.createElement("div");
    content.className = "card-container";
    const ads = allProducts[i];
    content.onclick = function () {
      window.location.href = "../Detail/detail.html?data=" + ads.id;
    };
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    const img = document.createElement("img");
    img.src = allProducts[i].url;
    img.style.width = "100%";
    img.style.height = "150px";
    const title = document.createElement("p");
    title.innerHTML = allProducts[i].title;
    const price = document.createElement("p");
    price.className = "fw-bold";
    price.innerHTML = allProducts[i].price;
    imgContainer.append(img);
    content.append(imgContainer);
    content.append(price);
    content.append(title);
    mainContainer.append(content);
  }
}
