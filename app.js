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
    window.location = "https://astrology-app-astrologica.herokuapp.com/members";
  });

  $("#project2").on("click", () => {
    window.location = "https://josephtawil.github.io/CSSearch/";
  });

  $("#project3").on("click", () => {
    location.href = "./soon.html";
  });

  $("#btn").on("click", () => {
    window.open(`mailto:j.tawil2015@gmail.com?subject=${name}&body=body`);
  });


});
