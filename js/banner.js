window.onload = function () {
    // banner图
    var bannerImg = document.getElementById("bannerImg");
    var bannerPoint = document.getElementsByClassName("bannerPoint");
    var bannerPoint1 = document.getElementById("bannerPoint1");
    var bannerPoint2 = document.getElementById("bannerPoint2");
    var bannerPoint3 = document.getElementById("bannerPoint3");
    var bannerPoint4 = document.getElementById("bannerPoint4");
    var bannerNext = document.getElementById("bannerNext");
    var bannerBack = document.getElementById("bannerBack");
    var bannerExibitImgWrapper = document.getElementById("bannerExibitImgWrapper");
    var bannerImgPosition = 10000;
    var bannerImgPositionS = "";
    var bannerTimer = null;
    var indexDot = 101;
    //第一次加载
    showDot((indexDot + 3) % 4);
    bannerImg.style.left = "0%";

    // 分别点击每个提示点
    bannerPoint1.onclick = function () {
        clearPoint();
        bannerImgPosition = 10000;
        bannerImgPositionS = "-" + (bannerImgPosition % 400) + "%";
        bannerImg.style.left = bannerImgPositionS;
        showDot(0);
        indexDot = 101;
    };
    bannerPoint2.onclick = function () {
        clearPoint();
        bannerImgPosition = 10100;
        bannerImgPositionS = "-" + (bannerImgPosition % 400) + "%";
        bannerImg.style.left = bannerImgPositionS;
        showDot(1);
        indexDot = 102;
    };
    bannerPoint3.onclick = function () {
        clearPoint();
        bannerImgPosition = 10200;
        bannerImgPositionS = "-" + (bannerImgPosition % 400) + "%";
        bannerImg.style.left = bannerImgPositionS;
        showDot(2);
        indexDot = 103;
    };
    bannerPoint4.onclick = function () {
        clearPoint();
        bannerImgPosition = 10300;
        bannerImgPositionS = "-" + (bannerImgPosition % 400) + "%";
        bannerImg.style.left = bannerImgPositionS;
        showDot(3);
        indexDot = 104;
    };
    // 清除提示点样式
    function clearPoint() {
        bannerPoint1.style.color = "#333";
        bannerPoint2.style.color = "#333";
        bannerPoint3.style.color = "#333";
        bannerPoint4.style.color = "#333";
    };
    //左右箭头点击
    bannerBack.onclick = function () {
        backPic();
    }
    bannerNext.onclick = function () {
        nextPic();
    }
    //刷新提示点显示
    function showDot(indexDot) {
        for (var i = 0; i < 4; i++) {
            if (i == indexDot)
                bannerPoint[i].style.color = "#5af";
            else
                bannerPoint[i].style.color = "#333";
        }
    }
    //鼠标移到图片上停止播放
    bannerExibitImgWrapper.onmouseenter = function () {
        clearInterval(bannerTimer);
    }
    bannerExibitImgWrapper.onmouseleave = function () {
        bannerAutoPlay();
    }
    //上一张图
    function backPic() {
        bannerImgPosition -= 100;
        bannerImgPositionS = "-" + (bannerImgPosition % 400) + "%";
        bannerImg.style.left = bannerImgPositionS;
        indexDot--;
        showDot((indexDot + 3) % 4);
    }
    //下一张图
    function nextPic() {
        bannerImgPosition += 100;
        bannerImgPositionS = "-" + (bannerImgPosition % 400) + "%";
        bannerImg.style.left = bannerImgPositionS;
        indexDot++;
        showDot((indexDot + 3) % 4);
    }
    //自动播放
    function bannerAutoPlay() {
        bannerTimer = setInterval(function () {
            nextPic();
        }, 3500)
    }
    bannerAutoPlay();
}