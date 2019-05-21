$(".sign_in").on("click",function(){
        location.href="login.html";
    });

$(document).ready(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        success:function(res){
            console.log(res);
            var arr = res;
            arr.forEach(function(element,index){
                   var container = document.createElement('div');
                   document.getElementById('posts').appendChild(container);
                    container.classList.add('contain');
                   var title = document.createElement('div');
                   container.appendChild(title);
                    title.classList.add('title');
                   title.innerHTML=arr[index].title;
                    var body = document.createElement('div');
                   container.appendChild(body);
                    body.classList.add('body');
                   body.innerHTML=arr[index].body;
            });
        }
    })
});