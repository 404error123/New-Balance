//轮播图
var box = document.getElementsByClassName("banner-box")[0],
    cnt = document.getElementsByClassName("bottom-banner")[0],
    next = document.getElementsByClassName("next")[0],
    prev = document.getElementsByClassName("prev")[0],
    img = box.getElementsByTagName("a"),
    timer,
    init,
    left,
    imgLength,
    maxLen,
    nextkey = true,
    index = 0,
    speed = 3000,//移动频率
    speed2 = 14;//图片移动速度
initCarousel();

function initCarousel(){
    var last = img[0].cloneNode(true);
    box.appendChild(last);
    initSize();
    initEvent();
    setTimer();
}
function setTimer(){
    timer = setInterval(function(){
        animate(1);//轮播图运动方向
    },speed);
}
function animate(dire){
    nextkey = false;    
    init = left;    
    index = dire==1?++index:--index;
    if(index>2){
        index = 0;
    }else if(index<0){
        index = 2;
    }
    setTimeout(function(){
        time(dire);
    },speed2);
}
function time(dire){
    if(dire==1){
        left = left-90;
    }else if(dire==2){
        if(left==0){
            init=left=-maxLen;
        }
        left = left+90;
    }
    if(init - imgLength > left && dire == 1){
        left = init - imgLength;
    }else if(init + imgLength < left && dire == 2){
        left = init + imgLength;
    }
    box.style.marginLeft = left +"px";
    var moveL = init - left;    
    if(moveL<imgLength && moveL>-imgLength){
        setTimeout(function(){
            time(dire);
        },speed2);
    }else{
        if(dire==1 && left<=-maxLen){
            left = 0;
            box.style.marginLeft = left +"px";
        }else if(dire==2 && left>0){
            left = -maxLen;
            box.style.marginLeft = left +"px";
        }
        nextkey = true;
    } 
}
function initEvent(){
    cnt.onmouseenter = function(){
        clearInterval(timer);
        next.onclick = function(){
            if(nextkey){
                animate(1);
            }
        };
        prev.onclick = function(){
            if(nextkey){
                animate(2);
            }
        };
    };
    cnt.onmouseleave = setTimer;
    document.addEventListener("visibilitychange", function(){
        if(document.hidden) {
            clearInterval(timer);
        }
        else {
            setTimer();
        }
    }); 
    window.addEventListener("resize",initSize)
}
function initSize(){
    imgLength = document.body.clientWidth;
    maxLen = imgLength*(img.length-1);
    left = -index*imgLength;
    box.style.marginLeft = left + "px";
    speed2 = parseInt(1920/imgLength)*14;
}