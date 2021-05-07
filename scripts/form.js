// A $( document ).ready() block.
$( document ).ready(function() {
   
  $(document).on("change","#t-shirt", checkTshirt)
  
  function checkTshirt() {
    
    var tshirt = $("#t-shirt").val();
    //alert(tshirt);
    
    
    if (tshirt =="CUSTOM") {
      //alert(tshirt);
      //I paused the lecture and made it hidden in the HTML before u showed the other way but i just left it how i did it
       $("#custom").removeAttr("hidden");
        $("#custom").removeAttr("disabled");
         $("#custom").attr("required", true);
          $("#custom").show();
         
    }//end of if tshirt
    
    else{
     $("#custom").hide();
      $("#custom").attr("disabled",true);
       $("#custom").val("");
        $("#custom").removeAttr("required");
         
      
    }//end of else is is tshirt
    
    
  } //end of checkTshirt function
  
  
});







//bootstrap validation from url https://getbootstrap.com/docs/4.0/components/forms/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



