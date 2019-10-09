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
public class BannerController {

    @RequestMapping("/bannerList")
    String login(){

        String sql = "select * from banner";

        System.out.println(sql);

        DBHelper db = new DBHelper(sql);

        ResultSet ret = null;

        ArrayList bannerList = new ArrayList();
        try {
            ret = db.pst.executeQuery();//执行语句，得到结果集
            while (ret.next()) {
                Banner banner = new Banner();
                banner.setId(ret.getString(1));
                banner.setType(ret.getString(2));
                banner.setCover(ret.getString(3));
                banner.setTitle(ret.getString(4));

                bannerList.add(banner);
                System.out.println(banner);
            }//显示数据
            ret.close();
            db.close();//关闭连接
        } catch (SQLException e) {
            e.printStackTrace();
        }

        System.out.println(bannerList);
        Map map = new HashMap();

        if(bannerList.size()<=0){
            map.put("code",0);
            map.put("status","fail");
            return JSON.toJSONString(map);
        }else {
            map.put("code",1);
            map.put("status","ok");
            map.put("data",bannerList);
            return JSON.toJSONString(map);
        }

    }


}
