(function(){
    var TopSele = document.getElementById('top_sele'),
        Button = TopSele.querySelectorAll('.top_button'),
        Section = document.querySelectorAll('.mysection');
    var arr = [rural,culture, feature];   // 把三个不同区域的函数放到同一个数组里

    arr[0](); 
    // 点击头部按钮时，改变样式和执行不同函数
    for(var i = 0; i < Button.length; i++){
        Button[i].index = i;
        Button[i].onmousedown = function(){
            for(var t = 0; t < 3; t++){
                Section[t].style.display = "none";
                Button[t].className = "top_button";
            }
            Section[this.index].style.display = "block";
            this.className = "top_button now_button";
            if(this.index)
                arr[this.index]();    // 执行当前区域的函数
        }
    }
})();

// 乡村美景
function rural() {
    var Rural = document.getElementById('rural'),
        One = document.getElementById('column_one'),
        Two = document.getElementById('column_two'),
        Three = document.getElementById('column_three'),
        CreateObj = null;
    // ImgArr:  存放图片名称的数组
    // ALink:  存放a标签链接的数组
    var ImgArr = ["IOS.png", "1.gif", "Android.png", "dx-pic.jpg",
        "female-phone.jpg", "zz/search_bk.jpg", "zz/rural_back.jpg", "zz/3.jpg", "zz/7.jpg",
        "zz/10.jpg", "zz/bkg2.jpg", "zz/11.jpg", "zz/5.jpg", "zz/bkg1.jpg",
        "zz/6.jpg", "zz/500447268.jpg", "zz/1.jpg", "zz/2.jpg", "zzz/2.jpg",
        "zzz/3.jpg", "zzz/1.jpg", "zzz/04b676587f5512a8012060c8a9c73f.jpg", "zzz/01b70858bceda0a801219c773a7c29.jpeg", "zzz/031f45c58bc3432a801219c7748c7e9.jpg",
        "zzz/}BB$_2F}`6L42LNKC$UQ6}1.png", "zzz/12ccb3a2e542c5d8cc552c5a6abc9a98.jpg", "zzz/0319a7258cce221a801219c774f8be1.jpg", "zzz/center.jpg"
    ],
        ALink = ["#","#","#","#","#","#","#","#","#","#","#","#","#",
        "#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"];
    var OneHeight = 0,
        TwoHeight = 0,
        ThreeHeight = 0,
        Scroll = 0,
        MinHeight = 0,
        WinHeight = 0,
        MarginTop = parseInt(Rural.offsetTop),
        ArrNow = 0,
        LinkArr = 0;
    var Child = "",
        // ImgLink： 存放图片地址的字符串
        ImgLink = "http://oj7iva9la.bkt.clouddn.com/image/dxstudiohome/";

    // 页面加载和页面滚动时执行Parellax()函数
    Parallax();
    window.onscroll = Parallax;

    function Parallax() {
        while (true) {
            if (ArrNow >= ImgArr.length - 2)
                break;
            Scroll = parseInt(document.documentElement.scrollTop || document.body.scrollTop);
            WinHeight = parseInt(window.screen.availHeight);
            MinObj = measure(One, Two, Three);

            // 判断是否要往页面中添加图片
            if (MinObj.Height <= WinHeight + Scroll - MarginTop) {
                // 用字符串去储存img序列
                for (var t = 0; t < 2; t++) {
                    Child += '<a href="'+ALink[LinkArr++]+'"><img class="rural_img"  src="' + ImgLink + ImgArr[ArrNow++] + '" alt="抱歉图片无法显示">';
                }
                MinObj.innerHTML += Child;
                Child = "";
            } else {
                break;
            }
        }
    }

    // 比较三个对象的高度大小，返回最小的高度的元素
    function measure(obj1, obj2, obj3) {
        var one = obj1.offsetHeight;
        var two = obj2.offsetHeight;
        var three = obj3.offsetHeight;
        obj1.Height = one;
        obj2.Height = two;
        obj3.Height = three;
        return one < two ? (one < three ? obj1 : obj3) : (two < three ? obj2 : obj3);
    }
}

function culture(){

}

function feature(){

}