function load_data() {
  urlParams = new URLSearchParams(window.location.search);
  courseTitle = urlParams.get("course");
  courseTitle = courseTitle.replaceAll("_", " ");
  document.getElementById("title").innerHTML = courseTitle;
}
