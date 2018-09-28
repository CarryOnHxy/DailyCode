<?php
/* 
    I.获取微信服务器参数 
    II.验证参数
        A.定义TOKEN
        B.获取signature、timestamp、nonce
        C.将其token timestamp nonce字典排序
        D.转化成字符串，并且使用sha1加密
        E.将其与signature比较
    III.返回验证结果

    IV. 验证结果
        1 token验证成功（执行过一次就不会在执行）
            echo echostr
        0 token验证失败 执行业务逻辑
    
    */
define('TOKEN','WechatPC');
/* access_token */
define('ASSESS_TOKEN','14_10jCkPlYEvt5QPaCbiENER1SScce2KE7FzNnmSlD9QjFzDKApJd8gSvM5vUSv13Bt_4kVLwRZzMAna77c_4LcPQrzr0-E9anp8BVGonQMxW0tx6kSe3KIWrLTaxXnzs9O7s5MYi7ArtSj6-BWCEaAGAFLN');
class WechatPC{
    public function __construct()
    {
        $this->diyMenu();
    }
    public function valid(){
        $echostr = $_GET['echostr'];
        if($this->check()){
            echo $echostr;
        }
        else{
            /*token验证之后只会走false*/
            $this->getReturnMSG();
        }
        
    }
    private function check(){
        $signature = $_GET['signature'];
        $timestamp = $_GET['timestamp'];
        $nonce = $_GET['nonce'];
        $tmp = [TOKEN,$timestamp,$nonce];
        sort($tmp);
        $tmpStr = implode($tmp);
        $tmpStr = sha1($tmpStr);
        if($tmpStr == $signature){
            return true;
        }else{
            return false;
        }
    }
    /* 实现curl方法
        A.curl初始化
        B.设置访问API
        B.curl设置选项（有安全认证的需要设置跳过安全认证）
        C.curl执行访问API
        D.将获得到的数据转换成字符串（不转换是一个为知类型，VD输出试一试）
        E.关闭curl
        F.反序列化
        G.返回给微信服务器
    */
    private function getApi($url,$type='get',$str=null){
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);

        $type=='get'?curl_setopt($ch,CURLOPT_RETURNTRANSFER,true)
        :curl_setopt($ch,CURLOPT_POST,true);

        $type=='post'&&curl_setopt($ch,CURLOPT_POSTFIELDS,$str);
        $data = curl_exec($ch);

        $data  = json_decode($data,true);
        curl_close($ch);
        return $data;
    }
    private function diyMenu(){
        $url ='https://api.weixin.qq.com/cgi-bin/menu/create?access_token='.ASSESS_TOKEN;
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
    /* 实现自动回复的功能,回复内容为发送的消息
        1.获取参数
        2.XML数据对象化
        3.整理参数
        4.生成回复消息
    */
    /*wechat获取服务器请求参数*/
    // 参数	描述
    // ToUserName	开发者微信号
    // FromUserName	发送方帐号（一个OpenID）
    // CreateTime	消息创建时间 （整型）
    // MsgType	text
    // Content	文本消息内容
    // MsgId	消息id，64位整型
    private function getReturnMSG(){
        /*必须使用globals来获取，因为微信服务器的请求并不是真正的post请求*/
        $postData = $GLOBALS['HTTP_RAW_POST_DATA'];
        $postData = simplexml_load_string($postData);

        $toUserName = $postData->ToUserName;
        $fromUserName = $postData->FromUserName;
        $createTime = time();
        $msgType = $postData->MsgType;
        $content = null;
        $textXml='
        <xml>
        <ToUserName><![CDATA[%s]]></ToUserName>
        <FromUserName><![CDATA[%s]]></FromUserName>
        <CreateTime>%s</CreateTime>
        ';
        /* 
            请求类型的多路分支
                请求为text类型：
                    1 内容为最新课程
                        添加数据到textXML
                    0 返回原内容
        */
        switch($msgType){
            case 'text':
            /* 回复图文消息XML格式
            <xml><ToUserName>< ![CDATA[toUser] ]></ToUserName>
            <FromUserName>< ![CDATA[fromUser] ]></FromUserName>
            <CreateTime>12345678</CreateTime>
            <MsgType>< ![CDATA[news] ]></MsgType>
            <ArticleCount>2</ArticleCount>
            <Articles><item><Title>< ![CDATA[title1] ]></Title>
            <Description>< ![CDATA[description1] ]></Description>
            <PicUrl>< ![CDATA[picurl] ]></PicUrl>
            <Url>< ![CDATA[url] ]></Url></item></Articles>
            */
            /* 添加图文消息
                定义数据 二维数组
                循环添加item字符串
                整合XML 返回数据
            */
                if($postData->Content =='最新课程'){
                $dataStr='';
                $data = [
                    ['Title'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200）',
                     'Description'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200',
                     'PicUrl'=>'http://xue.ujiuye.com/uploads_it/1808/QuanGuo/D8F1126038276JZ0.jpg',
                     'Url'=>'http://xue.ujiuye.com/class-24088/'],
                     ['Title'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200）',
                     'Description'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200',
                     'PicUrl'=>'http://xue.ujiuye.com/uploads_it/1808/QuanGuo/D8F1126038276JZ0.jpg',
                     'Url'=>'http://xue.ujiuye.com/class-24088/'],
                     ['Title'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200）',
                     'Description'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200',
                     'PicUrl'=>'http://xue.ujiuye.com/uploads_it/1808/QuanGuo/D8F1126038276JZ0.jpg',
                     'Url'=>'http://xue.ujiuye.com/class-24088/']
                ];
                $count = count($data);
                foreach($data as $v){
                    $dataStr.='<item><Title><![CDATA['.$v['Title'].']]></Title>
                    <Description><![CDATA['.$v['Description'].']]></Description>
                    <PicUrl><![CDATA['.$v['PicUrl'].']]></PicUrl>
                    <Url><![CDATA['.$v['Url'].']]></Url></item>';
                }
                $textXml.='<MsgType><![CDATA[news]]></MsgType><ArticleCount>'.$count.'</ArticleCount>
                <Articles>'.$dataStr.'</Articles></xml>';
                break;
                }
                /* 使用php的curl调用笑话数据接口
                    I.设置好url及其参数
                    II.使用curl进行请求
                   
                */
                if($postData->Content =='菜谱'){
                    $key = '37ad106e91fc77ceaa84d4c7c83d7be5';
                    $id = mt_rand(1,80000);
                    $url = "http://apis.juhe.cn/cook/queryid?id=$id&key=$key";
                    $data  = $this->getApi($url);
                    $content=$data['result']['data'][0]['title'];
                    $textXml.='<MsgType><![CDATA[text]]></MsgType><Content><![CDATA[%s]]></Content></xml>';
                    break;
                }
                if(strstr($postData->Content,'天气',true)){
                    $key = "36620100293156b7d98c864d9e06c6cc";//聚合数据接口密钥
                    $city = strstr($postData->Content,'天气',true);
                    $url="http://v.juhe.cn/weather/index?format=2&cityname=$city&key=$key";
                    $data = $this->getApi($url);
                    $content = $data['result']['today']['weather'];
                    $textXml.='<MsgType><![CDATA[text]]></MsgType><Content><![CDATA[%s]]></Content></xml>';
                    break;
                }
                    $textXml.='<MsgType><![CDATA[text]]></MsgType><Content><![CDATA[%s]]></Content></xml>';
                    $content = $postData->Content;
                    break;
            /* 接受事件推送类型 
                A.获取EVENT类型，为click还是其他
                B.获取key的值确定点击的是哪一个按钮
                C.执行相应功能
            */
            case 'event':
                if($postData->Event='CLICK'){
                    // echo('click');
                    switch($postData->EventKey){
                        case '最新课程':
                        $dataStr='';
                        $data = [
                            ['Title'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200）',
                             'Description'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200',
                             'PicUrl'=>'http://xue.ujiuye.com/uploads_it/1808/QuanGuo/D8F1126038276JZ0.jpg',
                             'Url'=>'http://xue.ujiuye.com/class-24088/'],
                             ['Title'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200）',
                             'Description'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200',
                             'PicUrl'=>'http://xue.ujiuye.com/uploads_it/1808/QuanGuo/D8F1126038276JZ0.jpg',
                             'Url'=>'http://xue.ujiuye.com/class-24088/'],
                             ['Title'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200）',
                             'Description'=>'【双节特价优惠】Linux运维工程师零基础入门（领券再减200',
                             'PicUrl'=>'http://xue.ujiuye.com/uploads_it/1808/QuanGuo/D8F1126038276JZ0.jpg',
                             'Url'=>'http://xue.ujiuye.com/class-24088/']
                        ];
                        $count = count($data);
                        foreach($data as $v){
                            $dataStr.='<item><Title><![CDATA['.$v['Title'].']]></Title>
                            <Description><![CDATA['.$v['Description'].']]></Description>
                            <PicUrl><![CDATA['.$v['PicUrl'].']]></PicUrl>
                            <Url><![CDATA['.$v['Url'].']]></Url></item>';
                        }
                        $textXml.='<MsgType><![CDATA[news]]></MsgType><ArticleCount>'.$count.'</ArticleCount>
                        <Articles>'.$dataStr.'</Articles></xml>';
                    }
                }
               
        }
        /*使用占位符来填充数据，返回XML消息格式*/
        echo sprintf($textXml,$fromUserName,$toUserName,$createTime,$content);
    }
}
 $accessWechat = new WechatPC();
 $accessWechat->valid();

 ?>