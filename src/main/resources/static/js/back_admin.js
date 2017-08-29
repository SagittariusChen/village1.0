// main部分
(function(){
    var MainHead = document.getElementById('main_head');
        Select = MainHead.querySelectorAll('.head_select');
        SecCon = document.getElementById('sec_con');
        Sec = SecCon.querySelectorAll('.main_sec');
    var Old = 0;

    for(var i = 0; i < Select.length; i++){
        Select[i].index = i;
        Select[i].onmousedown = function(){
            this.style.color = "#333";
            Select[Old].style.color = "#006699";
            Sec[Old].className = "main_sec";
            Sec[this.index].className = "main_sec now_sec";
            Old = this.index;
        }
    }
})();