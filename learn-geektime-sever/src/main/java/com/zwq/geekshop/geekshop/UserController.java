package com.zwq.geekshop.geekshop;

import com.alibaba.fastjson.JSON;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @RequestMapping("/login")
    String login(@RequestParam("name") String name,@RequestParam("password") String password){

        System.out.println(name);

        System.out.println(password);
//        return "成功";

        String sql = "select * from users WHERE username='"+name+"'"+"AND password='"+password+"'";


        System.out.println(sql);

        DBHelper db = new DBHelper(sql);

        ResultSet ret = null;

        ArrayList userList = new ArrayList();
        try {
            ret = db.pst.executeQuery();//执行语句，得到结果集
            while (ret.next()) {
                User user = new User();
                user.setName(ret.getString(2));
                user.setMail(ret.getString(3));
                user.setMail(ret.getString(4));

                userList.add(user);
                System.out.println(user);
            }//显示数据
            ret.close();
            db.close();//关闭连接
        } catch (SQLException e) {
            e.printStackTrace();
        }

        System.out.println(userList);
        Map map = new HashMap();

        if(userList.size()<=0){
            map.put("code",0);
            map.put("status","fail");
            return JSON.toJSONString(map);
        }else {
            map.put("code",1);
            map.put("status","ok");
            map.put("data",userList.get(0));
            return JSON.toJSONString(map);
        }

    }

    @RequestMapping("/sql")
    String sql(HttpServletRequest request){
        String sql = "select *from users";
        DBHelper db = new DBHelper(sql);
        ResultSet ret = null;

        ArrayList userList = new ArrayList();
        try {
            ret = db.pst.executeQuery();//执行语句，得到结果集
            while (ret.next()) {
                User user = new User();
                user.setName(ret.getString(2));
                user.setMail(ret.getString(3));
                user.setMail(ret.getString(4));

                userList.add(user);
                System.out.println(user);
            }//显示数据
            ret.close();
            db.close();//关闭连接
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return JSON.toJSONString(userList);
    }
}
