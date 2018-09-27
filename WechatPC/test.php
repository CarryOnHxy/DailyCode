<?php
define('ASSESS_TOKEN','14_10jCkPlYEvt5QPaCbiENER1SScce2KE7FzNnmSlD9QjFzDKApJd8gSvM5vUSv13Bt_4kVLwRZzMAna77c_4LcPQrzr0-E9anp8BVGonQMxW0tx6kSe3KIWrLTaxXnzs9O7s5MYi7ArtSj6-BWCEaAGAFLN');

class test{

    private function getApi($url,$type='get',$str=null){
        $ch = curl_init();
      
        curl_setopt($ch,CURLOPT_URL,$url);



        // $res = ($type=='get')?curl_setopt($ch,CURLOPT_RETURNTRANSFER,true)
        // :curl_setopt($ch,CURLOPT_POST,true);
        curl_setopt($ch,CURLOPT_POST,true);
        // $res = $type=='post'&&curl_setopt($ch,CURLOPT_POSTFIELDS,$str);
        curl_setopt($ch,CURLOPT_POSTFIELDS,$str);
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
        $data = curl_exec($ch);
        // var_dump($res);
        var_dump($data);

        $data  = json_decode($data,true);
        curl_close($ch);
        return $data;
    }
    public function diyMenu(){
        $url =' https://api.weixin.qq.com/cgi-bin/menu/create?access_token='.ASSESS_TOKEN;
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
        $res = $this->getApi($url,'post',$menuStr);
    }
}

$test = new test();
$test->diyMenu();