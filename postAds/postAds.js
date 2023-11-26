import { postAds, postFile } from "../config/firebase.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
var uid

const postBtn = document.getElementById("post-btn");
postBtn.addEventListener("click", async function getdata() {
  const allInputs = document.getElementsByTagName("input");
  const title = allInputs[0].value;
  const brand = allInputs[1].value;
  const price = allInputs[4].value;
  const img = allInputs[5].files[0];
  const nams = img.name;
  const url = await postFile(nams, img);
  const description = document.getElementById("Description").value;
  const neww = document.querySelector("input[name=btn]:checked").value;
  const userdata = JSON.parse(localStorage.getItem('userInfo'));
  onAuthStateChanged(auth,async (user)  => {
    if (user) {
      uid =await user.email;
      console.log(uid)
      var obj = {
        uid,
        title,
        brand,
        price,
        description,
        neww,
        url,
        username: userdata.userName,
        contact: userdata.contact,
      };
      postAds(obj);
      alert("Ads post successfully");
      console.log(obj);
    }else{
      alert('user not login')
    }
  })
 

  // window.location.href='../dashboard/dashboard.html'

  //  console.log(obj)
});

const auth = getAuth();
