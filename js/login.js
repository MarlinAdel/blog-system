$(document).ready(function(){
    $("button").on("click" ,function(){
        var emailValue = $("input[type='text']").val();
        var emailRejex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var emailResult = emailRejex.test(emailValue);
        if(emailValue==""){
          $(".email").show();  
          $(".email_error").hide();
        }
        else if(!emailResult){
            $(".email_error").show();
            $(".email").hide();
        }
        else if(emailResult){
           $(".email").hide(); 
           $(".email_error").hide();
        }
    
    });
    $("button").on("click" ,function(){
        var pswValue = $("input[type='password']").val(); 
        var pswRejex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})/;
        var pswResult = pswRejex.test(pswValue);
        if(pswValue==""){
          $(".psw").show();  
          $(".psw_error").hide();
        }
        else if(!pswResult){
            $(".psw_error").show();
            $(".psw").hide();
        }
        else if(pswResult){
           $(".psw").hide(); 
           $(".psw_error").hide();
        }
    
    });
     $("button").on("click" ,function(){
        var emailValue = $("input[type='text']").val();
        var emailRejex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var emailResult = emailRejex.test(emailValue);
        var pswValue = $("input[type='password']").val(); 
        var pswRejex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})/;
        var pswResult = pswRejex.test(pswValue);
        if(emailResult && pswResult){
            location.href='dashboard.html';
        }
    });
});
    