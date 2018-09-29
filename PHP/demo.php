<?php
/* 
    海滩上有一堆桃子，五只猴子来分。第一只猴子把这堆桃子凭据分为五份，多了一个，这只猴子把多的一
个扔入海中，拿走了一份。第二只猴子把剩下的桃子又平均分成五份，又多了一个，它同样把多的一个扔入海中
，拿走了一份，第三、第四、第五只猴子都是这样做的，问海滩上原来最少有多少个桃子？
*/


echo '<pre>';
/* 递归函数，当能够被5只猴子所分返回true
   满足分配规则$peachNum%5==1时
   A.  猴子数+1   
   B.  执行分配 分配后剩余($peachNum-1)/5*4 
   C.  继续调用递归直到猴子数为5
*/

function getPeach($peachNum,$monkey){
    if($peachNum%5==1){
        if(++$monkey==5)return true;
        return getPeach(($peachNum-1)/5*4,$monkey);
    } 
    return false;
}

$peachNum =0;
$monkey = 0;

while(1){
    if(getPeach($peachNum,$monkey)){
        echo "当桃子数为$peachNum 时,足够被五只猴子分完";
        break;
    }
    $peachNum++;
}