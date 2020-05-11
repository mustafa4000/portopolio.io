function about() {
  var story = document.getElementById('story');
  var about = document.getElementById('about');
  var skill = document.getElementById('skill');
  var icon  = document.getElementsByClassName('icon');

  icon[0].className = "icon";
  icon[1].className="icon actived";
  icon[2].className = "icon";
  skill.className = "hidden";
  story.className = "hidden";
  about.className = "show about";
}
function story() {
  var story = document.getElementById('story');
  var about = document.getElementById('about');
  var skill = document.getElementById('skill');
  var icon  = document.getElementsByClassName('icon');

  icon[0].className = "icon actived";
  icon[1].className="icon";
  icon[2].className = "icon";

  skill.className = "hidden";
  story.className = "show story";
  about.className = "hidden";
}
function skill() {
  var story = document.getElementById('story');
  var about = document.getElementById('about');
  var skill = document.getElementById('skill');
  var icon  = document.getElementsByClassName('icon');

  icon[0].className = "icon";
  icon[1].className="icon";
  icon[2].className = "icon actived";

  skill.className = "show skill";
  story.className = "hidden";
  about.className = "hidden";
}
