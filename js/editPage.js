$(document).ready(function(){
    $(document).on("click","#save",function(e){
        e.preventDefault();
        if(($("input").val()=="" || $("textarea").text()=="")){
            alert("this field is not allowed to be empty");
        }
       else{
        location.href='dashboard.html';
       }
    })
});