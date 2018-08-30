var key=0;
initEvent();
function initEvent(){
    var username = document.getElementById("username"),
        password = document.getElementById("password"),
        email = document.getElementById("email"),
        reemail = document.getElementById("reemail"),
        pwd = document.getElementById("pwd"),
        repwd = document.getElementById("repwd"),
        reg = /^[\w-]+@[a-z0-9]+(\.\w)*(\.[a-z]+)+$/,
        reg2 = /^[\w-\.@!]{8,}$/;
    document.getElementsByClassName("show")[0].onclick = function(){
        if(this.checked){
            password.type = "text";
        }else{
            password.type = "password";
        }
    }
    document.getElementsByClassName("re-show")[0].onclick = function(){
        if(this.checked){
            pwd.type = "text";
            repwd.type = "text";
        }else{
            pwd.type = "password";
            repwd.type = "password";
        }
    }
    verify(username,reg);
    verify(password,reg2);
    verify(email,reg);
    verify(reemail,reg);
    verify(pwd,reg2);
    verify(repwd,reg2);
    document.getElementById("login").onsubmit = function(){
        key = 0;
        verifyFinal(username,reg);
        verifyFinal(password,reg2);
        if(key==0){
            return true;
        }else{
            return false;
        }
    };
    document.getElementById("register").onsubmit = function(){
        key = 0;
        verifyFinal(email,reg);
        verifyFinal(reemail,reg);
        verifyFinal(pwd,reg2);
        verifyFinal(repwd,reg2);
        verifySame(email,reemail);
        verifySame(pwd,repwd);
        termsCheck();
        if(key==0){
            return true;
        }else{
            return false;
        }
    };
}
function verify(ele,reg){
    ele.oninput = function(){
        verifyFinal(ele,reg);
    }
}
function verifyFinal(ele,reg){
    var value = ele.value.trim();
    var warning = ele.nextElementSibling;
    if(value =="" || !reg.test(value)){
        warning.style.display = "block";
        ele.className = "waring";
        key++;
    }else{
        warning.style.display = "none";
        ele.className = "";
    }
}
function termsCheck(){
    var check = document.getElementsByClassName("lastcheck")[0];
    if(!document.getElementById("promise").checked){
        check.style.display = "block";
        key++;
    }else{
        check.style.display = "none";
    }
}
function verifySame(ele1,ele2){
    var value1 = ele1.value.trim();
    var value2 = ele2.value.trim();
    var warn = ele2.nextElementSibling;
    if(value1!=value2){
        key++;
        ele2.className = "waring";
        warn.innerHTML  = "两次输入内容不一致";
        warn.style.display = "block";
    }
}