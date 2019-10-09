package com.zwq.geekshop.geekshop;



import com.alibaba.fastjson.JSON;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;


@RestController
//@RequestMapping("/admin")

@SpringBootApplication
public class GeekshopApplication {

    @RequestMapping("/home")
    String home(HttpServletRequest request){
        String username = "zwq";

        return "欢迎您！"+username;
    }

    @RequestMapping("/array")
    String array(HttpServletRequest request){

        Data data1 = new Data();
        data1.setName("zwq1");
        data1.setAge(22);

        Data data2 = new Data();
        data2.setName("zwq2");
        data2.setAge(22);

        Data data3 = new Data();
        data3.setName("zwq3");
        data3.setAge(22);

        Data[] myList = new Data[3];
        myList[0] = data1;
        myList[1] = data2;
        myList[2] = data3;

        String obj = JSON.toJSONString(myList);
        return obj;
    }

    @RequestMapping("/list")
    String list(HttpServletRequest request){

        ArrayList list = new ArrayList();

        for (int i = 0; i<10 ; i++){
            Data data = new Data();
            data.setName("zwq"+i);
            data.setAge(20+i);
            list.add(data);
        }

        String obj = JSON.toJSONString(list);
        return obj;
    }

    @RequestMapping("/map")
    String map(HttpServletRequest request){

        ArrayList list = new ArrayList();

        for (int i = 0; i<10 ; i++){
            Map map = new HashMap();
            map.put("name","zwq"+i);
            map.put("age",20+i);
            list.add(map);
        }

        String obj = JSON.toJSONString(list);
        return obj;
    }




    public static void main(String[] args) {
        SpringApplication.run(GeekshopApplication.class, args);
    }

}
