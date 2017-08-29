(function(){
    var Head = document.getElementById('main_head'),
        Main = document.getElementById('main'),
        Select = Head.querySelectorAll('.head_select'),
        Sec = Main.querySelectorAll('.main_sec');
    var Old = 0;
    
    for(var i = 0;i < Select.length; i++){
        Select[i].index = i;
        Select[i].onmousedown = function(){
            Select[Old].style.color = "#666";
            this.style.color = "#000";
            Sec[Old].style.display = "none";
            Sec[this.index].style.display = "block";
            Old = this.index;
        }
    }
})();

(function(){
    /**
     * 分页
     * new Pageable(总页数, 显示页数, 当前页数, 对象)
     */
    var page = document.getElementById("page");
    var Page = new Pageable(10, 4, 2, page);
    Page.create();

    // 编辑文章部分
    var E = window.wangEditor;
    var editor = new E('#editor');
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload'; // 上传图片到服务器
    editor.create();

    var EditorStr = '<p><br>“美丽延庆·食在乡村”延庆乡村美食月拉开帷幕<br><br><br><br>5月28日，“美丽延庆·食在乡村”延庆区2016年乡村美食月开幕式在永宁镇上磨村举行。开幕式现场，美食大赛鸣锣开赛，30户民俗户各自拿出看家本领一决高下，近千道特色菜肴集体亮相。区领导穆鹏、祁金利、刘瑞成对活动进行了调研。<br><br><img src="http://www.zgmlxc.com.cn/uploads/1/image/public/201605/20160530165916_gu0rir.jpg" style="max-width: 100%;" class="" height="658" width="989"><br><br>上午8点，所有参赛选手带着自己准备的食材，借用上磨村农户的厨房，开始制作大餐。张山营镇西大庄科村松山朝阳沟农家院的主厨烹制的“海坨生态餐”格外引人注目，新鲜翠绿的山野菜堆砌成高耸入云的海坨山状，“山顶”点缀着雪白的椰蓉，恰似“海坨戴雪”盛景，既养生美味，又充满意境。“我们采用的全部是天然有机食材，新鲜又健康。”松山朝阳沟农家院负责人徐建仓告诉记者，“众所周知，延庆是2022冬奥会的三大赛区之一，我们做‘海坨生态餐’的初衷，也是希望能够为2022年冬奥会献上我们海坨山下民俗户的祝福。”<br><br>经过两小时的紧张制作，“妫源鲟鱼锅”“盔锅牧骨”“海坨生态餐”“河捞面”“闯王餐”……30种色香味俱全的乡村美食新鲜出炉，摆桌亮相。原北京饭店行政总厨、中国烹饪大师郑秀生，中国烹饪大师、面点大师王素明和三位延庆美食专家，分别从专业技术、餐饮特色等方面对参赛美食进行打分和讲评。最终，来自千家店镇的福禄长寿宴、来自八达岭镇的“闯王餐”和来自康庄镇的“官厅鱼宴”获得比赛一等奖。<br><br>据了解，本次美食月以“美丽延庆·食在乡村”为主题，历时一个月。值得一提的是，此次美食月活动推出了延庆首份“乡村美食手绘地图”和“美食护照”。此次开幕式上参赛的30家特色乡村美食及30家参展商被绘入地图。游客可以跟随“美食地图”寻访延庆乡村美食，在美食月期间享受70户民俗户提供的30种特色美食的9.5折优惠。同时，游客可通过关注“北京延庆”、“美丽延庆”官方微信参与“最受游客喜爱的延庆十大乡村美食”活动，为喜爱的美食投票点赞。<br><br>美食月期间，配合着“美食天天品”和“美食集结令”活动，1000本的限量版美食护照也将发放到游客手中，美食护照既有收藏价值，还可兑换礼品。游客可在开幕式现场填写问卷或关注“北京延庆”、“美丽延庆”官方微信方式获取“美食护照”，持美食护照可在消费参赛美食后盖章，集齐一定数量的美食章后可到区旅游委兑换相应礼品。<br><br>此外，开幕式现场，除了激烈的美食比拼，太平鼓、旱船等精彩绝伦的非遗表演也让游客大饱眼福。同时，游客还可在特色商品展示区，体验制作陶艺、剪纸、皮雕和烫画等多种延庆特色工艺，品尝火勺等延庆特产。而现场的有奖问答环节，也让在场游客加深了对延庆绿色发展大事和乡村美食文化的了解，受到游客欢迎。<br>来源：中国青年网<br>0<br><br></p>';
    var EidtorCon = document.querySelector('#editor').querySelector('.w-e-text');
    EidtorCon.innerHTML = EditorStr;
    
    // 发布文章部分
    var editor = new E('#wang_editor');
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload'; // 上传图片到服务器
    editor.create();
})();