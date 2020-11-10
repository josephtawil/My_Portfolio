$(document).ready(function () {
  $(window).scroll(function() {
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }
    else{
      $('.navbar').removeClass("sticky");
    }
  });

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  })

  var typed = new Typed(".typing", {
    strings: ["Software Engineer", "Web Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Software Engineer", "Web Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var name = document.getElementById("#name");
  $("#linkedin").on("click", () => {
    window.location = "https://www.linkedin.com/in/joseph-tawil/";
  });
  $("#github").on("click", () => {
    window.location = "https://github.com/josephtawil?tab=repositories";
  });
  $("#resume").on("click", () => {
    location.href = "./styling/resume/MyResume.pdf";
  });

  $("#project1").on("click", () => {
    window.open("https://astrology-app-astrologica.herokuapp.com/")
  })


  $("#project2").on("click", () => {
    window.location = "https://josephtawil.github.io/CSSearch/";
  });

  $("#project3").on("click", () => {
    location.href = "https://smack-lab-app.herokuapp.com/home";
  });

  $("#btn").on("click", () => {
    window.open(`mailto:j.tawil2015@gmail.com?subject=${name}&body=body`);

  });


});
