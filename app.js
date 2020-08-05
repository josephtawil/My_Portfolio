$(document).ready(function() {
    $("#linkedin").on("click",() =>{
        window.location = "https://www.linkedin.com/in/joseph-tawil/" ;
    });
    $("#github").on("click",() =>{
        window.location = "https://github.com/josephtawil?tab=repositories" ;
    });
    $("#resume").on("click",() =>{
       location.href = "./styling/resume/MyResume.pdf";
    });
});