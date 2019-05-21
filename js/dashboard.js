$(document).ready(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        success:function(res){
            console.log(res);
            var arr = res;
            arr.forEach(function(element,index){
                var container = document.createElement('div');
                container.classList.add("grid");
             document.getElementById('body').appendChild(container);
                var name = document.createElement('div');
                name.classList.add('name');
                name.innerHTML=arr[index].title;
                container.appendChild(name);
                var content = document.createElement('div');
                content.classList.add('content');
                content.innerHTML=arr[index].body;
                 container.appendChild(content);
                var actions = document.createElement('div');
                 container.appendChild(actions);
                var btnDelete = document.createElement('button');
                btnDelete.classList.add('delete');
               
             btnDelete.innerHTML="Delete";
                var btnEdit = document.createElement('button');
                btnEdit.classList.add('edit');
                btnEdit.innerHTML="Edit";
                actions.appendChild(btnEdit);
                actions.appendChild(btnDelete);
                

            })
        }
    })
    $(document).on('click','.delete',function(){
        var result =confirm("Are you sure !!");
         console.log(result);
        if(result){
            $(this).parent().parent().remove();
        }
       ;
    }) 
      $("#body").on('click','.edit',function(){
         localStorage.setItem("EditTitle",$(this).parent().siblings(".name").text());
          localStorage.setItem("EditBody",$(this).parent().siblings(".content").text());
          location.href="EditPage.html";
    })
    $("#title").val(localStorage.getItem("EditTitle"));
    $("#body").val(localStorage.getItem("EditBody"));
    
});