document.addEventListener("scroll", function () {
  let vHeight = (window.innerHeight)*0.995
  const navbar = document.querySelector(".wish_list_subject_finder_container");
  const navbarHeight = vHeight;
  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );
  if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});