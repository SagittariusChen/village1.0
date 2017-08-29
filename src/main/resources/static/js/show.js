// 头部选择部分
(function(){
    var HeadCon = document.getElementById('header_con'),
        SeleIn = HeadCon.querySelectorAll('.select_input'),
        SeleNow = HeadCon.querySelectorAll('.select_now'),
        SeleAll = HeadCon.querySelectorAll('.select_all');
    var Arr = [];   // 定义一个用来存放选择对象的数组

    for(var i = 0; i < SeleIn.length; i++){
        SeleNow[i].index = i;
        // 点击框时选项的显示和消失
        SeleNow[i].onmousedown = function(){
            var _this = this;
            if(this.isDown = !this.isDown){
                SeleAll[this.index].style.display = "block";
            } else {
                SeleAll[this.index].style.display = "none";
            }
        }
        // 选取all_sec对象存入数组
        Arr[i] = SeleAll[i].querySelectorAll('.all_sec');
        // 每个对象点击时的函数
        for(var t = 0; t < Arr[i].length; t++){
            Arr[i][t].index = i;
            Arr[i][t].onmousedown = function(){
                SeleNow[this.index].innerHTML = this.innerHTML;
                SeleAll[this.index].style.display = "none";
                SeleNow[this.index].isDown = false;
            }
        }
    }
})();