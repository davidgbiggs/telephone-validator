const form = document.querySelector("#tp-form");
const input = document.querySelector("#tp-input");
const tpResult = document.querySelector("#tp-result");

form.addEventListener("submit", checkPalindrome, false);
input.addEventListener("focus", setFocusDirections, false);
input.addEventListener("blur", setBlurDirections, false);

// function executed for its side effects
function checkPalindrome(event) {
  const inputValue = event.srcElement[0].value;
  tpResult.textContent = "Checking...";

  setTimeout(() => {
    if (inputValue.length === 0) {
      tpResult.textContent = "You should probably type something.";
    } else if (telephoneCheck(inputValue)) {
      tpResult.textContent = "Valid!";
    } else {
      tpResult.textContent = "Invalid!";
    }
  }, 200);

  // pure function, determines if phone # is valid
  function telephoneCheck(str) {
    // use capture groups to enforce consistency with dashes or spaces
    const first = /^[(]\d{3}[)]\d{3}-\d{4}/gm;
    const second = /^\d{10}$/gm;
    const third = /^\d{3}-\d{3}-\d{4}/gm;
    const fourth = /^1\s\d{3}-\d{3}-\d{4}/gm;
    const fifth = /^1\s\d{3}\s\d{3}\s\d{4}/gm;
    const sixth = /^1\s[(]\d{3}[)]\s\d{3}-\d{4}/gm;
    const seventh = /^1[(]\d{3}[)]\d{3}-\d{4}/gm;
    return (
      first.test(str) ||
      second.test(str) ||
      third.test(str) ||
      fourth.test(str) ||
      fifth.test(str) ||
      sixth.test(str) ||
      seventh.test(str)
    );
  }
}

function setFocusDirections() {
  tpResult.textContent = "Press enter to evaluate.";
}

function setBlurDirections() {
  tpResult.textContent = "Press tab... or tap the box.";
}
