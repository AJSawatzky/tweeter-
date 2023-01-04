$(document).ready(function () {
  console.log("ready");
  // --- our code goes here ---

  const $form = $("form");
  const $input = $("#tweet-text");
  $form.on("submit", function  (event) {
    const tweetLength = this.value?.length;
    const lettersAllowed = 140 - tweetLength;
    if (lettersAllowed < 0) {
      alert("Tweet is over the character limit");
    } else if (lettersAllowed === 140) {
      alert("Please enter a tweet");
    } else {
      event.preventDefault();
      $(this).serialize();
      $input.val("");
      console.log(postTweet($(this).serialize()));
    }
  });
});
