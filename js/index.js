
initEvent();
//注册事件
function initEvent(){
    var gotop = document.getElementsByClassName("gotop")[0];
    var meng = document.getElementsByClassName("meng")[0];
    var ul = document.getElementsByClassName("xiala-nav")[0];
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