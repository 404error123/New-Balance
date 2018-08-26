
screenSize();
initEvent();
//隐藏二级导航宽度自适应
function screenSize(){
    var li = document.getElementsByClassName("li");
    for(var i = 0; i<li.length;i++){
        var box = li[i].getElementsByClassName("hidden-box")[0];
        var length = document.body.clientWidth;
        box.style.width = length+"px";
        box.style.left = -getLeft(li[i])+"px";
    }
}
function getLeft(obj) {
    var liLeft = obj.offsetLeft; 
    while (obj = obj.offsetParent) {
        liLeft += obj.offsetLeft; 
    }
    return liLeft;
}
//注册事件
function initEvent(){
    var gotop = document.getElementsByClassName("gotop")[0];
    var meng = document.getElementsByClassName("meng")[0];
    var ul = document.getElementsByClassName("xiala-nav")[0];
    window.addEventListener("resize",screenSize);
    ul.onmouseover = function(){
        meng.style.display = "block";
    }
    ul.onmouseleave = function(){
        meng.style.display = "none";
    }
    window.addEventListener("scroll",function() {
        var scTop =  document.body.scrollTop || document.documentElement.scrollTop;
        if(scTop>=600){
            gotop.style.display = "block";
        }else{
            gotop.style.display = "none";
        }
    })
}