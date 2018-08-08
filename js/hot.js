var aside = document.getElementsByTagName("aside")[0];
var asideTop = aside.offsetTop;
var ftTop = document.getElementsByClassName("back")[0].offsetTop ;
var len = aside.offsetHeight;
var num = ftTop - len;
window.addEventListener("scroll",function() {
    lenTop =  document.body.scrollTop || document.documentElement.scrollTop;
    if(lenTop>=asideTop){
        aside.className = "fixed";
        if(lenTop>=num){
            aside.className = "";
        }
    }
    if(lenTop<=asideTop){
        aside.className = "";
    }
})