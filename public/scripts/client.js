/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const format = window.timeago.format;


const renderTweets = function(tweets) {
  for (let i in tweets) {
    let $tweet = createTweetElement(tweets[i]);
    $("#tweets-container").append($tweet);
  }
};

  const createTweetElement = function(tweetObject) {
    const safeHTML = `<div
    class="text">${escape(tweetObject.content.text)}</div>`;
    const fullTweet = `<article class="tweet">
  <header>
    <div class="tweet-profile">
    <img src="${tweetObject.user.avatars}" class="profile-img"> 
    <p class="user-name">${tweetObject.user.name}</p>
    </div>
    <div class="alias">
      ${tweetObject.user.handle}
    </div>
    </header>
     ${safeHTML}
    <footer>
      <div class="tweet-date">
    ${format(tweetObject.created_at)}
    </div>
    <div class="tweet-icons">
      <button><i class="fa-regular fa-flag"></i></button>
      <button><i class="fa-solid fa-retweet"></i></button> 
      <button class="likes"><i class="fa-solid fa-heart"></i><div class="like-count">1</div></button> 
    </div>
  </footer>
</article>
`;

return fullTweet;

};

const loadTweets = function() {
  $.ajax("/tweets", {method: "GET"}).then(function(data) {
    $("#tweet-text").val("").focus();
      $(".errobar").remove();
      renderTweets(data);
    });
};

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$("#tweetform").on("submit", (event) => {
  event.preventDefault();
  const formData = $("#tweetform").serialize();
  const $textArea = $("#tweet-text");
  let string = $textArea.val();

  if (string.length > 140) {
    const errorPlace = $("#tweetform label:first-child");
    return errorPlace.after(errorMessage("Shorten your text."));
  }

  if (!string) {
    const errorPlace = $("#tweetform label:first-child");
    return errorPlace.after(errorMessage("Enter some text."));
  }

  $.post("/tweets", formData, () => {
    if ($(".errorbar").length) {
      $(".errorbar").remove();
    }
    loadTweets();
  });
});

const errorMessage = function(string) {
  const fullError = `<div class="errorbar">${string}</div>`;

  return fullError;
};

$(".new-tweet-button").mouseenter(function() {
  $(this).children().animate({
    paddingTop: "0.4em"
  }, 500);
});
$(".new-tweet-button").mouseout(function() {
  $(this).children().animate({
    paddingTop: "0em"
  }, 500);
});

$(".new-tweet-button").click(function() {
  $(".new-tweet").slideDown("slow");
  $("#tweet-text").focus();
});

loadTweets();
});
