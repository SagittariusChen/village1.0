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

    // 编辑乡村部分
    var E = window.wangEditor;
    var editor = new E('#editor');
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload'; // 上传图片到服务器
    editor.create();

    var EditorStr = '<p><br>乡村介绍<br>温县陈家沟是中国太极拳发源地。陈家沟，是赵堡镇的一个行政村，人口2800多人，村民小组10个。位于县城东5公里处的清风岭上，南邻黄河，南水北调渠穿村而过。陈家沟原名常阳村，明洪武年间，山西泽州人陈卜迁至该村，因村中有一条南北走向的深沟，遂陈氏人丁繁衍，村名变更为陈家沟。明末清初，陈氏第九世陈王廷，依据祖传拳术，博采众家之长，汇集《易经》太极阴阳之理、中医经络学说、道家导引吐纳等，创编了一种内外兼修、柔和、缓慢、轻灵、刚柔相济的拳术——陈式太极拳。经300余年传承，形成了陈、杨、武、吴、孙、和等太极拳流派。<br>乡间美景<br>温县陈家沟是中国太极拳发源地。陈家沟，是赵堡镇的一个行政村，人口2800多人，村民小组10个。位于县城东5公里处的清风岭上，南邻黄河，南水北调渠穿村而过。陈家沟原名常阳村，明洪武年间，山西泽州人陈卜迁至该村，因村中有一条南北走向的深沟，遂陈氏人丁繁衍，村名变更为陈家沟。明末清初，陈氏第九世陈王廷，依据祖传拳术，博采众家之长，汇集《易经》太极阴阳之理、中医经络学说、道家导引吐纳等，创编了一种内外兼修、柔和、缓慢、轻灵、刚柔相济的拳术——陈式太极拳。经300余年传承，形成了陈、杨、武、吴、孙、和等太极拳流派。<br>文化习俗<br><br>温县陈家沟是中国太极拳发源地。陈家沟，是赵堡镇的一个行政村，人口2800多人，村民小组10个。位于县城东5公里处的清风岭上，南邻黄河，南水北调渠穿村而过。陈家沟原名常阳村，明洪武年间，山西泽州人陈卜迁至该村，因村中有一条南北走向的深沟，遂陈氏人丁繁衍，村名变更为陈家沟。明末清初，陈氏第九世陈王廷，依据祖传拳术，博采众家之长，汇集《易经》太极阴阳之理、中医经络学说、道家导引吐纳等，创编了一种内外兼修、柔和、缓慢、轻灵、刚柔相济的拳术——陈式太极拳。经300余年传承，形成了陈、杨、武、吴、孙、和等太极拳流派。<br><br><img src="http://www.zgmlxc.com.cn/uploads/1/image/public/201411/20141118101232_six6da.jpg" style="max-width: 100%;" class="" height="336" width="1001"><br>    <br>地方特产<br>温县陈家沟是中国太极拳发源地。陈家沟，是赵堡镇的一个行政村，人口2800多人，村民小组10个。位于县城东5公里处的清风岭上，南邻黄河，南水北调渠穿村而过。陈家沟原名常阳村，明洪武年间，山西泽州人陈卜迁至该村，因村中有一条南北走向的深沟，遂陈氏人丁繁衍，村名变更为陈家沟。明末清初，陈氏第九世陈王廷，依据祖传拳术，博采众家之长，汇集《易经》太极阴阳之理、中医经络学说、道家导引吐纳等，创编了一种内外兼修、柔和、缓慢、轻灵、刚柔相济的拳术——陈式太极拳。经300余年传承，形成了陈、杨、武、吴、孙、和等太极拳流派。<br></p>';
    var EidtorCon = document.querySelector('#editor').querySelector('.w-e-text');
    EidtorCon.innerHTML = EditorStr;

    /**
     * 分页
     * new Pageable(总页数, 显示页数, 当前页数, 对象)
     */
    var page = document.getElementById("page");
    var Page = new Pageable(10, 4, 2, page);
    Page.create();
})();

// 发布乡村
(function(){
    var Com = document.getElementById('mycomments');
    var ComLine = Com.querySelectorAll('.com_line');
    var ComOther = Com.querySelector('#com_other');
    var Select;

    // 每个按钮的isDown属性来判断是否点击，true为点击
    for (var i = 0; i < ComLine.length; i++) {
        Select = ComLine[i].querySelectorAll('.com_sele');
        select(Select);
    }

    // 发布乡村内容部分
    var E = window.wangEditor;
    var editor = new E('#wang_editor');
    editor.customConfig.uploadImgShowBase64 = true;
    editor.create();

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
    Other = ComOther.querySelectorAll('.com_sele');
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