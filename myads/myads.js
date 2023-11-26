import { myAds } from "../config/firebase.js";

document.addEventListener("DOMContentLoaded", async function () {
  var container = document.getElementById('container');

  async function userAds() {
    try {
      const userProduct = await myAds();
      console.log("UserProduct", userProduct);

      for (var i = 0; i < userProduct.length; i++) {
        console.log("iii=", userProduct[i]);

        container.innerHTML += `
          <p>Profile</p>
          <h5><b>Manage and view your Ads</b></h5>
          <div class="row ads">
            <div class="col-md-3">
              <div class="card-container img-cont">
                <div class="img-container">
                  <img src=${userProduct[i].url} class='pro' alt="" width="102%" srcset="">
                  <h2>${userProduct[i].title}</h2>
                </div>
              </div>
            </div>  
            <div class="col-md-3 box-flex">
              <div class="username">
                <h5><b>User Name:</b></h5>
                <h6>${userProduct[i].username}</h6>
              </div>
              <div class="cond">
                <h5><b>Condition:</b></h5>
                <h6>${userProduct[i].neww}</h6>
              </div>
            </div>  
            <div class="col-md-3 box-flex">
              <div class="username">
                <h5><b>Brand:</b></h5>
                <h6>${userProduct[i].brand}</h6>
              </div>
              <div class="cond">
                <h5><b>Contact:</b></h5>
                <h6>${userProduct[i].contact}</h6>
              </div>
            </div>  
            <div class="col-md-3 box-flex">
              <div class="username">
                <h5><b>Description:</b></h5>
                <h6>${userProduct[i].description}</h6>
              </div>
              <div class="cond">
                <h5><b>Price:</b></h5>
                <h6>Rs${userProduct[i].price}</h6>
              </div>
            </div>  
          </div>`;
      }
    } catch (error) {
      console.error("Error fetching user ads:", error);
    }
  }

  userAds();
});
