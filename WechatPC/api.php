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
class CheckSignature{
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
        $content = $postData->Content;

        switch($msgType){
            case 'text':
            $textXml="
            <xml>
            <ToUserName><![CDATA[%s]]></ToUserName>
            <FromUserName><![CDATA[%s]]></FromUserName>
            <CreateTime>%s</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[%s]]></Content> 
            </xml>";
                /*使用占位符来填充数据，返回XML消息格式*/
            echo sprintf($textXml,$fromUserName,$toUserName,$createTime,$content);
            
        }
    }
}
 $accessWechat = new CheckSignature();
 $accessWechat->valid();

 ?>