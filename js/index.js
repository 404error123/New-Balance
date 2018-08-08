var gotop = document.getElementsByClassName("gotop")[0];
var meng = document.getElementsByClassName("meng")[0];
var ul = document.getElementsByClassName("xiala-nav")[0];
var li = document.getElementsByClassName("li");
var liLeft;
screenSize();
window.onresize = screenSize;

function screenSize(){
    for(var i = 0; i<li.length;i++){
        var box = li[i].getElementsByClassName("hidden-box")[0];
        var length = document.body.clientWidth;
        box.style.width = length+"px";
        getPoint(li[i]);
        box.style.left = -liLeft+"px";
    }
}
function getPoint(obj) { 
    liLeft = obj.offsetLeft; 
    while (obj = obj.offsetParent) {
        liLeft += obj.offsetLeft; 
    }
}
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

// var ul = document.getElementsByClassName("xiala-nav")[0];
// var hid = document.getElementsByClassName("hid-list-box");
// var bigBox = document.getElementsByClassName("hidden-box")[0];

// ul.onmouseover = function(event){
//     var target = event.target||event.srcElement;
//     var index = target.getAttribute("index")-1;
//     for(i=0;i<hid.length;i++){
//         hid[i].style.display = "none";
//     }
//     hid[index].style.display = "flex";
//     meng.style.display = "block";
//     ul.onmouseleave = function(){
//         hid[index].style.display = "none";
//         meng.style.display = "none";
//     }
//     bigBox.onmouseover = function(){
//         hid[index].style.display = "flex";
//         meng.style.display = "block";
//     }
//     bigBox.onmouseleave = function(){  
//         hid[index].style.display = "none";
//         meng.style.display = "none";
//     }
// }