$(document).ready(function () {
    console.log("jQuery is ready!");

  $(".bar-fill").each(function () {
    $(this).text($(this).data("level") + "%");
  });

  $("h1").css("letter-spacing", "0.5px");
  $("#name").css("color", "#4f46e5");
  $(".headline").css("font-size", "1.1rem");

  var greetings = [
    "Hello, and welcome!",
    "Thanks for visiting my page!",
    "Welcome to My Portfolio"
  ];
  var gIndex = 0;
  $("#btn-greeting").click(function () {
    gIndex = (gIndex + 1) % greetings.length;
    $("#welcome-title").text(greetings[gIndex]);
    $("#headline").html("I am the creator of this page");
  });

  var themes = {
    light: { bg: "#f5f6fa", text: "#1f2430", card: "#ffffff", border: "#e3e6ee", input: "#ffffff", track: "#e3e6ee" },
    dark:  { bg: "#12141c", text: "#e8eaf2", card: "#1c202c", border: "#2e3445", input: "#262b3a", track: "#2e3445" }
  };
    var currentTheme = themes.light;
    function applyTheme(t) {
      currentTheme = t;
      $("body").css({ "background-color": t.bg, "color": t.text });
      $(".card").css({ "background-color": t.card, "border-color": t.border });
      $("input").css({ "background-color": t.input, "color": t.text, "border-color": t.border });
      $(".bar-track").css("background-color", t.track);
      $(".accordion-item").css("border-top-color", t.border);
    }
  $("#btn-light").click(function () { applyTheme(themes.light); });
  $("#btn-dark").click(function () { applyTheme(themes.dark); });

  $("#btn-hide").click(function () { $("#status, #fun-facts").hide(); });
  $("#btn-show").click(function () { $("#status, #fun-facts").show(); });
  $("#btn-toggle").click(function () { $("#status, #fun-facts").toggle(); });

  $("#btn-fadein").click(function () { $(".gallery-img").fadeIn(600); });
  $("#btn-fadeout").click(function () { $(".gallery-img").fadeOut(600); });
  $("#btn-fadetoggle").click(function () { $(".gallery-img").fadeToggle(600); });

  $(".slide-heading").click(function () { $(this).next(".panel").slideToggle(400); });
  $("#btn-slideup").click(function () { $(".panel").slideUp(400); });
  $("#btn-slidedown").click(function () { $(".panel").slideDown(400); });
  $("#btn-slidetoggle").click(function () { $(".panel").slideToggle(400); });

  function getSkill() {
    var value = $.trim($("#skill-input").val());
    if (value === "") {
      $("#skill-error").text("Please enter a skill. Empty skills cannot be added.");
      return null;
    }
    $("#skill-error").text("");
    return value;
  }
    var barsAreFull = false;

  function makeBar(skill) {
    var w = barsAreFull ? 40 : 0;
    return '<div class="bar-row"><span class="bar-label">' + $("<div>").text(skill).html() +
           '</span><div class="bar-track"><div class="bar-fill" data-level="40" style="width:' + w + '%">40%</div></div></div>';
  }

  $("#btn-add-skill").click(function () {
    var skill = getSkill();
    if (skill === null) return;
    $("#skill-list").append($("<li>").text(skill));
    $("#skill-bars").append(makeBar(skill));
    $("#skill-input").val("");
  });
  $("#btn-prepend-skill").click(function () {
    var skill = getSkill();
    if (skill === null) return;
    $("#skill-list").prepend($("<li>").text(skill));
    $("#skill-bars").prepend(makeBar(skill));
    $("#skill-input").val("");
    applyTheme(currentTheme);
  });
  $("#btn-remove-skill").click(function () {
    $("#skill-list li:last").remove();
    $("#skill-bars .bar-row:last").remove();
  });

  var githubUrl = "https://github.com/adilzhankairgaliev6-pixel";
var instaUrl = "https://www.instagram.com/adil.kairgaliev/";

$("#link-url").text($("#social-link").attr("href"));

$("#btn-change-link").click(function () {
  var $link = $("#social-link");

  if ($link.attr("href") === githubUrl) {
    $link.attr("href", instaUrl).text("My Instagram");
    $(this).text("Change Link to GitHub");
  } else {
    $link.attr("href", githubUrl).text("My GitHub");
    $(this).text("Change Link to Instagram");
  }
  $("#link-url").text($link.attr("href"));
});

  $("#name-input").on("input", function () { $("#live-name").text($(this).val()); });
  $("#email-input").on("input", function () { $("#live-email").text($(this).val()); });

  $("#btn-animate-skills").click(function () {
    if (!barsAreFull) {
      $(".bar-fill").each(function () {
        $(this).animate({ width: $(this).data("level") + "%" }, 1200);
      });
    } else {
      $(".bar-fill").animate({ width: "0%" }, 800);
    }
    barsAreFull = !barsAreFull;
  });
});
