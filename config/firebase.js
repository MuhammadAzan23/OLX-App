import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query, where,
  getDocs,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyAx9dZP8oFPaf_yV-ik4WZ35rTyj_d-6Ek",
  authDomain: "olx-app-c9ce0.firebaseapp.com",
  projectId: "olx-app-c9ce0",
  storageBucket: "olx-app-c9ce0.appspot.com",
  messagingSenderId: "519244245567",
  appId: "1:519244245567:web:512e56f97948700f8ba68a",
  measurementId: "G-EZE6JLYRWR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function signsup(user) {
  const { email, password } = user;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      var encodedData = encodeURIComponent(email);
      window.location.href = "../dashboard/dashboard.html?data=" + encodedData;
      alert("sign-up successfully");
      window.location.href = "../dashboard/dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function navigate() {
  window.location.href = "../login/index.html";
}

function login(user) {
  const { email, password } = user;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      var encodedData = encodeURIComponent(email);
      window.location.href = "../dashboard/dashboard.html?data=" + encodedData;
      alert("login-successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
}

async function postAds(obj) {
  try {
    const docRef = await addDoc(collection(db, "Ads"), obj);
    console.log("Document written with ID: ", docRef.id);
    console.log(obj);
    window.location.replace("../dashboard/dashboard.html");
    return obj;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const storage = getStorage();

async function postFile(nams, img) {
  const storageRef = ref(storage, "Images/" + nams);
  uploadBytes(storageRef, img).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
  const url = await getDownloadURL(storageRef);
  return url;
}

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "Ads"));
  const allAds = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const ad = doc.data();
    ad.id = doc.id;
    allAds.push(ad);
  });
  // console.log(allAds)
  return allAds;
}

async function details(productsID) {
  const docRef = doc(db, "Ads", productsID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data();
}
;
async function myAds() {
  return new Promise((resolve, reject) => {
    const userAllads = [];

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = await user.email;
          const q = query(collection(db, "Ads"), where("uid", "==", uid));

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            userAllads.push(doc.data());
          });

          resolve(userAllads);
        } catch (error) {
          reject(error);
        }
      } else {
        alert("User Not Logged In");
        resolve(userAllads); // Resolving with an empty array if the user is not logged in
      }
    });
  });
}

export {myAds, postAds, details, postFile, signsup, login, getAds, navigate };
// 24th nov firday:
// varaiables
// Increment / Decrement
// string (splice, slice ,split,replace,concatenation,())
