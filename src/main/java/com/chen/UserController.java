package com.chen;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by 陈锦 on 2017/8/28.
 */
@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //跳转链接，跳转到主页

    @RequestMapping("")

    public String index(HttpServletResponse response) {
        //重定向到 /index
        return response.encodeRedirectURL("/index");
    }

    @RequestMapping("/index")

    public String home(Model model) {

        //对应到templates文件夹下面的index

        return "index";

    }
}
