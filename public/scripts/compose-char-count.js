$(document).ready(function () {
  const maxCount = 140;
  const $textArea = $("#tweet-text");

  // count the remaining chars available and display on screen

  const updateCount = function () {
    const string = $(this).val();
    const count = maxCount - string.length;

    const counter = $(this).next().children().last();
    counter.text(count);

    if (count < 0) {
      $(counter).addClass("red-text");
    } else {
      $(counter).removeClass("red-text");
    }
  };

  $textArea.on("input", updateCount);
});