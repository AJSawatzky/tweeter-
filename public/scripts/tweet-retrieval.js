$(document).rready(function () {
  console.log("ready");
// --- our code goes here ---

  const $form = $("form");
  $form.on('submit',function(event) {
    event.preventDefault();
    $(this).serialize()

    console.log(postTweet($(this).serialize()))
  });
});