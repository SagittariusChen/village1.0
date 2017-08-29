(function(){
    /**
     * 分页
     * new Pageable(总页数, 显示页数, 当前页数, 对象)
     */
    var page = document.getElementById("page");
    var Page = new Pageable(10, 4, 2, page);
    Page.create();
})();