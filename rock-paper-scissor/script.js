$("#options img").click(function () {
  document.getElementById("result").innerHTML = "";

  var user_choice = this.cloneNode(true);
  var computer_choice = document
    .querySelectorAll("#options img")
    [Math.floor(Math.random() * 3)].cloneNode(true);

  var message = document.createElement("h2");
  var increase_score = "user-score";
  if (
    user_choice.getAttribute("data-name") ==
    computer_choice.getAttribute("data-name")
  ) {
    user_choice.classList.add("draw");
    computer_choice.classList.add("draw");
    message.innerText = "Draw";
    increase_score = "";
  } else if (
    user_choice.getAttribute("data-name") == "rock" &&
    computer_choice.getAttribute("data-name") == "scissor"
  ) {
    user_choice.classList.add("win");
    computer_choice.classList.add("lose");
    message.innerText = "Win";
  } else if (
    user_choice.getAttribute("data-name") == "scissor" &&
    computer_choice.getAttribute("data-name") == "paper"
  ) {
    user_choice.classList.add("win");
    computer_choice.classList.add("lose");
    message.innerText = "Win";
  } else if (
    user_choice.getAttribute("data-name") == "paper" &&
    computer_choice.getAttribute("data-name") == "rock"
  ) {
    user_choice.classList.add("win");
    computer_choice.classList.add("lose");
    message.innerText = "Win";
  } else {
    user_choice.classList.add("lose");
    computer_choice.classList.add("win");
    message.innerText = "Lost";
    increase_score = "computer-score";
  }

  document.getElementById("result").appendChild(user_choice);
  document.getElementById("result").appendChild(message);
  document.getElementById("result").appendChild(computer_choice);

  $("#scores").css("display", "block");
  // or  $(this).clone().appendTo("#result");

  if (increase_score != "") {
    increment(increase_score);
  }
});

$("button").click(function () {
  document.getElementById("user-score").innerText = "0";
  document.getElementById("computer-score").innerText = "0";
  $("#scores").css("display", "none");
  document.getElementById("result").innerHTML = "";
});

function increment(increase_score) {
  var element = document.getElementById(increase_score);
  element.innerText = parseInt(element.innerText) + 1;
}
