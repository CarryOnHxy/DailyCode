<?php

$appid = "wx12b86ca88e13b106";
$appsecret="398a46a93a4a3db3cd87ff2ca356ee8b";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$appsecret;

	//初始化连接句柄
	$curl = curl_init();


	//设置rurl的选项
	curl_setopt($curl,CURLOPT_URL,$url);
	//设置为true表示稍后的curl_exec函数执行的结果返回的是字符串

	curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);

	//跳过证书检查

	curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,false);


	//执行并获取结果

	$str = curl_exec($curl);

	//关闭释放连接的句柄 $curl

	$data = json_decode($str,true);
	curl_close($curl);


	// var_dump($data['access_token']);

	//14.23.152.58

    $token = $data["access_token"];
    
    echo $token;


$url ='https://api.weixin.qq.com/cgi-bin/menu/create?access_token='.$token;
        $menuStr = '{
            "button": [
                {
                    "name": "关于我们", 
                    "sub_button": [
                        {	
                            "type":"view",
                            "name":"搜索",
                               "url":"http://www.soso.com/"
                        }, 
                        {
                            "type": "view", 
                            "name": "优就业", 
                            "url":"http://www.ujiuye.com/"
                        }
                        ,{
                            "type":"click",
                            "name":"联系我们",
                             "key": "联系我们"
                        }
                    ]
                }, 
                {
                    "name": "发图", 
                    "sub_button": [
                        {
                            "type": "pic_sysphoto", 
                            "name": "系统拍照发图", 
                            "key": "rselfmenu_1_0", 
                           "sub_button": [ ]
                         }, 
                        {
                            "type": "pic_photo_or_album", 
                            "name": "拍照或者相册发图", 
                            "key": "rselfmenu_1_1", 
                            "sub_button": [ ]
                        }, 
                        {
                            "type": "pic_weixin", 
                            "name": "微信相册发图", 
                            "key": "rselfmenu_1_2", 
                            "sub_button": [ ]
                        }
                    ]
                }, 
                {
                    "name": "最新课程", 
                    "sub_button":[
                        {
                            "type":"click",
                            "name":"最新课程",
                            "key":"最新课程"
                        },
                        {
                            "type":"click",
                            "name":"笑话",
                            "key":"笑话"
                        },
                    ]
                }
               
            ]
        }';

        $ch = curl_init();
      
        curl_setopt($ch,CURLOPT_URL,$url);



        // $res = ($type=='get')?curl_setopt($ch,CURLOPT_RETURNTRANSFER,true)
        // :curl_setopt($ch,CURLOPT_POST,true);
        curl_setopt($ch,CURLOPT_POST,true);
        // $res = $type=='post'&&curl_setopt($ch,CURLOPT_POSTFIELDS,$str);
        curl_setopt($ch,CURLOPT_POSTFIELDS,$menuStr);
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
        $data = curl_exec($ch);
        // var_dump($res);
        

        $data  = json_decode($data,true);
        
        curl_close($ch);

        var_dump($data);
        