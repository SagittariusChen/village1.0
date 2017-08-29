// 左侧导航栏点击效果
(function () {
    var SubLi = document.getElementById('subnav').querySelectorAll('li');
    var Modify = document.getElementById('modify');
    var ModifySec = Modify.querySelectorAll('.modify_sec');
    SubLi.inow = 0;

    for (var i = 0; i < SubLi.length; i++) {
        SubLi[i].index = i;
        SubLi[i].onmousedown = function () {
            // 导航栏变样式
            SubLi[SubLi.inow].className = "subnav_li";
            this.className = "subnav_li inow_li";
            // 右侧翻页
            ModifySec[SubLi.inow].className = "modify_sec";
            ModifySec[this.index].className = "modify_sec inow_sec";
            $("#modify_su")[0].className = "modify_sec";
            SubLi.inow = this.index;
        }
    }
})();

// 基本信息
(function () {
    var Basic = document.getElementById('basic');
    var Hide = Basic.querySelectorAll('.hide');
    var Show = Basic.querySelectorAll('.show');
    var Chang = Basic.querySelector('#basic_change');
    var True = Basic.querySelector('#basic_true');
    var False = Basic.querySelector('#basic_false');
    var Class = "";

    // 修改个人信息点击效果
    Chang.onmousedown = function () {
        for (var i = 0; i < Hide.length; i++) {
            Hide[i].style.cssText = "display:block !important";
        }
        for (var i = 0; i < Show.length; i++) {
            Show[i].style.cssText = "display:none !important";
        }
    }

    // 取消点击效果
    False.onmousedown = function () {
        for (var i = 0; i < Hide.length; i++) {
            Hide[i].style.cssText = "display:none !important";
        }
        for (var i = 0; i < Show.length; i++) {
            Show[i].style.cssText = "display:block !important";
        }
    }

    var BasicSu = document.getElementById('basic_su');
    var ModifyBasic = document.getElementById('modify_basic');
    var ModifySu = document.getElementById('modify_su');
    var BasicRe = document.getElementById('basic_return');

    BasicSu.onmousedown = function () {
        ModifyBasic.className = "modify_sec";
        ModifySu.className = "modify_sec inow_sec";
        console.log('1');
    }

    BasicRe.onmousedown = function () {
        ModifyBasic.className = "modify_sec inow_sec";
        ModifySu.className = "modify_sec";
    }

    // 验证码
    var PutVerify = document.getElementById('put_verify');
    var Verify = document.getElementById('verify');
    var VarTime = 60;
    PutVerify.onmousedown = function () {
        this.style.display = "none";
        Verify.style.display = "inline-block";
        Verify.innerHTML = "已发送短信(60s)";
        Verify.timer = setInterval(function () {
            VarTime--;
            Verify.innerHTML = "已发送短信(" + VarTime + "s)";
            if (VarTime == 0) {
                clearInterval(Verify.timer);
                Verify.style.display = "none";
                PutVerify.style.display = "inline-block";
                VarTime = 60;
            }
        }, 1000);
    }
})();

// 收藏夹
(function () {
    var Collection = document.getElementById('collection');
    var Section = Collection.getElementsByTagName('section');
    var Byword = document.getElementById('byword');
    var Byrural = document.getElementById('byrural');

    Byword.onmousedown = function () {
        this.className = "btn btn-info";
        Byrural.className = "btn btn-default";
        Section[0].className = "show";
        Section[1].className = "hide";
    }

    Byrural.onmousedown = function () {
        this.className = "btn btn-info";
        Byword.className = "btn btn-default";
        Section[1].className = "show";
        Section[0].className = "hide";
    }

    // 收藏文章
    // 爱心点击效果
    var WordUl = document.getElementById('word_ul');
    var WordHeart = WordUl.querySelectorAll('.glyphicon');

    for (var i = 0; i < WordHeart.length; i++) {
        WordHeart[i].onmousedown = function () {
            if (this.className == "glyphicon glyphicon-heart") {
                this.className = "glyphicon glyphicon-heart-empty";
            } else {
                this.className = "glyphicon glyphicon-heart";
            }
        }
    }

    // 收藏乡村
    var Rural = document.getElementById('rural_main');
    var RuHeart = Rural.querySelectorAll('.rural_heart');

    for (var i = 0; i < RuHeart.length; i++) {
        RuHeart[i].onmousedown = function () {
            if (this.className == "rural_heart glyphicon glyphicon-heart") {
                this.className = "rural_heart glyphicon glyphicon-heart-empty";
            } else {
                this.className = "rural_heart glyphicon glyphicon-heart";
            }
        }
    }

    // 分页
    var page = document.getElementById("page");
    var Page = new Pageable(10, 4, 2, page);
    Page.create();

    // wangeditor
    var E = window.wangEditor;
    var editor = new E('#wang_editor');
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload'; // 上传图片到服务器
    editor.create();
    var $wangEditor = $("#wang_editor");
    var WeText = $wangEditor[0].querySelector(".w-e-text");
    WeText.innerHTML = '乡村内容';
})();

// 查看信息
(function () {
    var TableCon = document.getElementById('table_container');
    var Tbody = TableCon.querySelector("tbody");
    var Tr = Tbody.querySelectorAll('tr');
    var Check = Tbody.querySelectorAll('.check');
    var Readed = Tbody.querySelectorAll('.readed');
    var Remove = Tbody.querySelectorAll('.remove');
    var arr = [],
        Length = Tr.length;

    // 数组的每个元素对应一行tr，不同的值有不同的意思
    // 0为已删除，1为已选择，2为未选择
    for (var i = 0; i < Length; i++) {
        arr[i] = 2;
        Remove[i].index = i;
        Check[i].index = i;
        // 删除一行
        Remove[i].onmousedown = function () {
            Tbody.removeChild(Tr[this.index]);
            arr[this.index] = 0;
        }
        Check[i].onmousedown = function(){
            arr[this.index] = 1;
        }
    }

    // 全选
    var AllCheck = TableCon.querySelector('#ope_check'); // 全选按钮
    var AllRemove = TableCon.querySelector('#ope_remove'); // 全部删除
    var AllWord = TableCon.querySelector('#allword');

    AllWord.onmousedown = AllCheck.onmousedown = function () {
        // 如果已经是全选状态，则再次点击全部取消选择
        if (AllCheck.checked) {
            for (var i = 0; i < Length; i++) {
                Check[i].checked = false;
                // 若arr[i]不为0，则赋值2给它
                // 即未被删除则其变为未选择
                if(arr[i])
                    arr[i] = 2;
            }
        // 上同
        } else {
            for (var i = 0; i < Length; i++) {
                Check[i].checked = true;
                if(arr[i])
                    arr[i] = 1;
            }
        }
    }

    AllRemove.onmousedown = function(){
        // 遍历arr，若arr中的某个元素为1则删除该元素所对应的tr
        for(var i = 0; i < Length; i++){
            if(arr[i]===1){
                Tbody.removeChild(Tr[i]);
                arr[i]=0;
            }
        }
        AllCheck.checked = false;
    }

    // 查看
    for(var i = 0; i<Length;i++){
        Readed[i].onmousedown = function(){
            
        }
    }
})();

// 推荐乡村
(function () {
    var Com = document.getElementById('mycomments');
    var ComLine = Com.querySelectorAll('.com_line');
    var ComOther = Com.querySelector('#com_other');
    var Select;

    // 每个按钮的isDown属性来判断是否点击，true为点击
    for (var i = 0; i < ComLine.length; i++) {
        Select = ComLine[i].querySelectorAll('.com_sele');
        select(Select);
    }

    function select(obj) {
        var Old = obj[0];
        for (var t = 0; t < obj.length; t++) {
            obj[t].index = t;
            obj[t].onmousedown = function () {
                // 奇数次点击变蓝色，偶数次变回原来的颜色
                if (this.isDown = !this.isDown) {
                    // 如果两次点击的是不一样的按钮就执行里面的语句
                    if (Old != this) {
                        Old.className = "com_sele btn btn-default";
                        Old.isDown = false;
                    }
                    this.className = "com_sele btn btn-info";
                } else {
                    this.className = "com_sele btn btn-default";
                }
                Old = obj[this.index];
            }
        }
    }

    // 其他部分
    var Other = ComOther.querySelectorAll('.com_sele');
    Other.Count = 0;
    for (var i = 0; i < Other.length; i++) {
        Other[i].onmousedown = function () {
            if (this.isDown = !this.isDown) {
                if (Other.Count >= 3) {
                    alert("最多选三个");
                    this.isDown = false;
                } else {
                    this.className = "com_sele btn btn-info";
                    Other.Count++;
                }
            } else {
                this.className = "com_sele btn btn-default";
                Other.Count--;
            }
        }
    }
})();