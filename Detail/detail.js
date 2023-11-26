import { details } from "../config/firebase.js";

renderCurrentAds();
async function renderCurrentAds() {
  const productsID = window.location.search.split("=")[1];
  const allDetails = await details(productsID);
  console.log(allDetails);
const email= document.getElementById('email')
  const img = document.getElementById("image");
  const img2 = document.getElementById("image2");
  const img3 = document.getElementById("image3");
  const price = document.getElementById("price");
  const title = document.getElementById("title");
  const brand = document.getElementById("brand");
  const price2 = document.getElementById("price2");
  const condition = document.getElementById("condition");
  const description = document.getElementById("description");
  const username = document.getElementById('user')
  const contact = document.getElementById('contact')
  img.src = allDetails.url;
  img2.src = allDetails.url;
  img3.src = allDetails.url;
  email.className='btn login'
 title.innerHTML = allDetails.title;
  brand.innerHTML = allDetails.brand;
  price2.innerHTML = allDetails.price;
  contact.innerHTML=allDetails.contact
  email.innerHTML= allDetails.username
  condition.innerHTML = allDetails.neww;
  username.innerHTML= allDetails.username
  price.innerHTML = "Rs " + allDetails.price;
  description.innerHTML = allDetails.description;
  title.style.fontWeight = "700";
  brand.style.fontWeight = "700";
  price2.style.fontWeight = "700";
  username.style.fontWeight = "700";
  condition.style.fontWeight = "700";
}
