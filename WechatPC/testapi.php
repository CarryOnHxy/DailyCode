<?php
        /* 收到的assess_token */
        define('ASSESS_TOKEN','14_ZuFhu1QCWP_-uY7AwfE5uDuhaP8gQPWb0GYFSUiUj-nv1zcKjjdGOWQUJSmafZA6d--dmDmUtRHNzboSxcsCRdf6G7sNg5yvRjFtrvxdamISaqXe0IzH-4Xu7C-fiJNBrYq5kLGTgnHwYdAWEQQgADALXX');
        /* 测试菜谱API */
        $key = "37ad106e91fc77ceaa84d4c7c83d7be5";
        $id = mt_rand(1,80000);
        $url = "http://apis.juhe.cn/cook/queryid?id=$id&key=$key";
        /* 获取公众测试号的access token */
        $appid='wx77a0cece03fa24c2';
        $appscrect='fdc96c7330fd838fd66860104d245162';
        $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appid.'&secret='.$appscrect;
        // var_dump($url);
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        $data = curl_exec($ch);
        $data  = json_decode($data,true);
        curl_close($ch);
        var_dump($data);
        