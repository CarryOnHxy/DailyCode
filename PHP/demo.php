<?php
/* 
    海滩上有一堆桃子，五只猴子来分。第一只猴子把这堆桃子凭据分为五份，多了一个，这只猴子把多的一
个扔入海中，拿走了一份。第二只猴子把剩下的桃子又平均分成五份，又多了一个，它同样把多的一个扔入海中
，拿走了一份，第三、第四、第五只猴子都是这样做的，问海滩上原来最少有多少个桃子？
*/
//$num-1-($num-1/5)
/* 
    A.递归函数 (参数为 总桃子数，当前递归次数)
    B.无限循环调用递归，递归次数==5说明桃子分成功了
*/

function getPeach($peachNum,$current){
    echo 'current: ',$current,'<br>';
    if($current==4) echo '桃子';
    if($peachNum%5==1&&$peachNum>5) getPeach(($peachNum-1)/5*4,$current+1);
  
}

for($num=0;$num<=10000;$num++){
    echo 'num: ',$num,'<br>';
    var_dump(getPeach($num,0));
    // var_dump(getPeach($num,0),'<br>');
    // if(getPeach($num,0)){
    //     break;
    // }
}

// var_dump(getPeach());