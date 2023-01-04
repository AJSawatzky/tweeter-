$(document).ready(function () {
  console.log("ready");
//

  const $tweet = $(".tweets");
  const $flag = $(".fa-solid.fa-flag");
  const $retweet = $(".fa-solid.fa-retweet");
  const $heart = $(".fa-solid.fa-heart");

  $tweet.on("mouseover", function (event) {
    $(this).addClass("shadow");
  });

  $tweet.on("mouseover", function (event) {
    $tweet.removeClass("shadow");
  });

  $flag.on("mouseover", function (event) {
    $(this).addClass("flag");
  });

  $flag.on("mouseover", function (event) {
    $flag.removeClass("flag");
  });

  $retweet.on("mouseover", function (event) {
    $(this).addClass("retweet");
  });

  $retweet.on("mouseover", function (event) {
    $retweet.removeClass("retweet");
  });

  $heart.on("mouseover", function (event) {
    $(this).addClass("heart");
  });

  $heart.on("mouseover", function (event) {
    $heart.removeClass("heart");
  });
});