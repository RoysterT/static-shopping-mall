window.onload = function () {
    loadCart();
    // 清空购物车
    document.getElementById("clearCartBtn").onclick = function(){
        localStorage.clear();
        loadCart();
    }
    var addToCartBtn = document.getElementsByClassName("addToCartBtn");
    var goodsInShelfAmount = addToCartBtn.length;
    for (var i = 0; i < goodsInShelfAmount; i++) {
        addToCartBtn[i].onclick = function () {
            var isFind = false;
            var showBody = document.getElementById("showBody");
            var goodsName = this.parentNode.parentNode.getElementsByClassName("product-name")[0].innerHTML;
            var goodsPrice = this.parentNode.parentNode.getElementsByClassName("product-integer")[0].innerHTML;
            goodsPrice+=this.parentNode.parentNode.getElementsByClassName("product-decimal")[0].innerHTML;
            var goodsSrc = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("img")[0].src;
            alert(goodsSrc);
            var goodsInCartRow = showBody.getElementsByTagName("tr");
            for(var j = 0;j<goodsInCartRow.length;j++){
                var goodsInCartName = goodsInCartRow[j].firstChild.innerHTML;
                if(goodsInCartName==goodsName){
                    var goodsNum = goodsInCartRow[j].getElementsByTagName("td")[2].innerHTML;
                    goodsInCartRow[j].getElementsByTagName("td")[2].innerHTML=goodsNum++;
                    isFind = true;
                    var msg={
                        name:goodsName,
                        price:goodsPrice,
                        num:goodsNum
                    };
                    var nameStorage= goodsName;
                    localStorage.removeItem(nameStorage);
                    localStorage.setItem(nameStorage,JSON.stringify(msg));
                    goodsName.value="";
                    goodsPrice.value="";
                    break;
                }
            }
            if(!isFind){
                var goodsNum = 1;
                var msg={
                    name:goodsName,
                    price:goodsPrice,
                    num:goodsNum
                };
                var nameStorage= goodsName;
                localStorage.setItem(nameStorage,JSON.stringify(msg));
                goodsName.value="";
                goodsPrice.value="";
            }
            // alert("品名："+goodsName+"，价格："+goodsPrice+"，数量："+goodsNum);
            loadCart();
        };
    }
    function loadCart() {
        var showBody = document.getElementById("showBody");
        showBody.innerHTML = "";
        if (localStorage.length != 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var jsonStr = localStorage.getItem(key);
                var json = JSON.parse(jsonStr);
                var row = showBody.insertRow(i);
                row.insertCell(0).innerHTML = json.name;
                row.insertCell(1).innerHTML = json.price;
                row.insertCell(2).innerHTML = json.num;
            }
        }
    };
}