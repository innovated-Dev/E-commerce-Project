document.body;
const header = document.querySelector("header");

// let listApplainces = document.createEl```ement("ul");
// dashboard.appendChild(listApplainces).html;
// console.log(listApplainces);
// let listItem = document.createElement("li");
// console.log(listItem);
// listApplainces.appendChild(listItem);
// let lastItem = listItem.cloneNode(true);
// console.log(lastItem);

let navBar = document.createElement("nav");
console.log(navBar);
navBar.className = "nav_section";
navBar.innerHTML = `<ul class="ul-list id="ul">
                        <span class="class1">
                            <div class="shop">
                            <img src="/assets/iconshop.png">
                            <li class="listing-item">
                            <div>Shop</div>
                            <div><div>
                            <div class="shopping-dropdown">
                              <a href="">New</a>
                              <a href="">Men</a>
                              <a href="">Jelwery</a>
                              <a href="">Watches</a>
                              <a href="">Perfumes</a>
                              <a href="">Bags and small Leather Goods</a>
                              <a href="">Trunks, Travel and Home</a>
                              <a href="">Gifts</a>
                            </div>
                            </li>
                            </div>

                            <div class="list-item">
                            <li>
                            <i class="fa-sharp-duotone fa-solid fa-heart fa-shake fa-xl" style="color: #bdbab3;"></i>
                            <li>
                            </div>
                            <div class="list-item">
                                <li class="help">Chat Us</li>
                            </div>
                        </span>
                        <span class="class2">
                            <li><h3> e-trade<sup>market</sup></h3></li>
                        </span>
                        <span class="class2b">
                            <li class="search-box">
                             <input type="search" name="searchBox" id="search" placeholder="Search Item.....">
                             <i class="fa-solid fa-magnifying-glass fa-2xl search-icon" id="search-icon"></i>
                            </li>   
                        </span>
                        <span class="class3">
                            
                            <div class="cart">
                            <li><i class="fa-solid fa-cart-arrow-down fa-shake fa-xl" style="color: #bdbab3;"></i></li>
                            <li>Cart</li>
                            </div>
                            <div class="cart">
                            <li><i class="fa-regular fa-user fa-xl" style="color: #bdbab3;"></i></li>
                            <li>Accounts</li>
                            </div>
                            <li><button id="btn">Sign Up</button></li>
                        </span>
                    </ul>`;
header.innerHTML;
header.appendChild(navBar);

let btn = document.querySelector("#btn");
let searchBar = document.getElementById(".search");
let searchIcon = document.getElementById("search-icon");
function mouseOver(e) {
  return;
}
searchIcon.addEventListener("click mouseover", mouseOver);

let section = document.getElementById("section");
section.innerHTML = `<div class="first-part">
<div class="dashboard">
    <h1 class="dashboard-head">e-trade! Keep in touch with the world....</h1>
    <p class="dashboard-head text">Million shopper can't wait to see what we have in stores</p>
    
    <button id="shopBtn"> <p>shop now</p> <i class="fa-solid fa-arrow-right fa-bounce fa-xl" style="color: #84868b;"></i> </button>
    
</div>
</div>
<div class="sec-part">
    <div class="showcase">
        <div class="item a">
        <img src="/assets/Screenshot 2024-11-15 181432.png" alt="">
        </div>
        <div class="item b">
        <img src="/assets/Screenshot 2024-11-15 181607.png" alt="">
        </div>
         <div class="item c">
        <img src="/assets/Screenshot 2024-11-15 181529.png" alt="">
        </div>
        <div class=" item d">
        <img src="/assets/men.png" alt="">
        </div>
        
    </div>

</div>`;

let headerEl = section.querySelector("h1.dashboard-head");
let bodyEl = section.querySelector("p.dashboard-head");
let headerTxt = `e-trade! Keep in touch with the world....`;
let bodyText = `Million shopper can't wait to see what we have in stores`;
let interval = 200;
headerEl.innerText = "";
bodyEl.innerText = "";
let intervalID = setInterval(() => {
  let wordArr = headerTxt + bodyText;
  console.log(wordArr.split(4, 9));

  if (headerEl.innerText.length == 0) {
    delete sessionStorage.countNum;
  }

  let num = parseInt(sessionStorage.countNum);

  if (isNaN(num)) num = 0;

  if (num + 1 >= wordArr.length) {
    delete sessionStorage.countNum;
    clearInterval(intervalID);
    return;
  }
  //console.log("this", wordArr);
  if (num + 1 <= headerTxt.length) {
    headerEl.append(wordArr[num]);
  } else {
    bodyEl.append(wordArr[num]);
  }
  num++;
  sessionStorage.countNum = num;
}, interval);

let dashboard = document.querySelector(".dashboard");
function dashboardSwitch(e) {
  dashboard = e;
  let headText = document.querySelectorAll(".dashboard-head");

  let text = document.querySelector(".text");
  text = new String("Million shopper can't wait to see what we have in stores");
  console.log(text);
  for (let x = 0; x <= text.length; x++) {
    console.log(x);
  }
  //   setInterval(() => {
  //     console.log(headText);
  //   }, 1000);
}
dashboardSwitch();

// const clearBtn = document.querySelector(".area");
// area.value = localStorage.getItem("area");
// area.oninput = () => {
//   localStorage.setItem("area", area.value);
// };
