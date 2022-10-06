$(document).ready(() => {
    let auth_login;
    const password = 'test';
    const logUser= 'test';
    $("input").addClass('border__input');
    $("label").addClass('label__input');
    $("p").addClass('p__footer');
    $("#tform").submit(function (e) { 
        e.preventDefault();
       auth_login = $("#tform").find("input").val();
        
       if($("#password").val() == "" || password !== $("#password").val() || logUser !== auth_login){
        $("#error")
        .html("Information Incorrect")
        .addClass("red")
       }else{
        localStorage.content = logUser
        location = "../index.html";
       }
    });
  
   
  });