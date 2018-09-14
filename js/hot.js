aside();
function aside(){
    var aside = document.getElementsByTagName("aside")[0],
        asideTop = aside.parentElement.offsetTop,
        ftTop = document.getElementsByClassName("back")[0].offsetTop,
        num = ftTop - aside.offsetHeight,
        moveKey = true,
        lenTop;
    window.addEventListener("scroll",function(){
        lenTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(lenTop>asideTop && moveKey){
            aside.className = "fixed";
            if(lenTop>=num){
                aside.className = "scroll";
            }
            moveKey = false;
        }else if(lenTop<=asideTop && !moveKey){
            aside.removeAttribute("class");
            moveKey = true;            
        }
    })
}