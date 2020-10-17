let myPaswword = document.querySelector("#my_password"),
  btnShow = document.querySelector("#show"),
  icon_Num_chars = document.querySelector("#numChars"),
  icon_Upper_Lower = document.querySelector("#upper_lower"),
  icon_digits = document.querySelector("#digits"),
  informationBtn = document.querySelector("#information"),
  rulesDiv = document.querySelector(".rules"),
  min_length,
  pattern = /[A-Z]/,
  pattern2 = /\d/;

btnShow.onclick = function () {
  if (myPaswword.getAttribute("type") == "password") {
    btnShow.textContent = "Hide";
    myPaswword.setAttribute("type", "text");
  } else {
    btnShow.textContent = "Show";
    myPaswword.setAttribute("type", "password");
  }
};

myPaswword.oninput = function () {
  // Check length
  min_length = myPaswword.value.length;
  if (min_length > 6) {
    icon_Num_chars.style.color = "green";
  } else {
    icon_Num_chars.style.color = "red";
  }

  if (pattern.test(myPaswword.value)) {
    icon_Upper_Lower.style.color = "green";
  } else {
    icon_Upper_Lower.style.color = "red";
  }
  if (pattern2.test(myPaswword.value)) {
    icon_digits.style.color = "green";
  } else {
    icon_digits.style.color = "red";
  }
};

window.onload = function () {
  $(rulesDiv).hide();
};
informationBtn.onclick = function () {
  $(rulesDiv).toggle(1000);
};
