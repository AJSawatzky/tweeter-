$(document).ready(function() {
  console.log("ready");

  // 
  const $input = $("#tweet-text");
  const $counter = $("#tweet-counter");

  $input.on("input", function (event) {
    const tweetLength = this.value?.length;
    const lettersAllowed = 140 - tweetLength;
    $counter.addClass("negative");
    if (lettersAllowed < 0) {
      $counter.addClass("negative");
    } else {
      $counter.removeClass("negative");
    }
  });
});