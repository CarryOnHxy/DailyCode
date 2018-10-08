<?php
class dbMysql
{
	private $host;
	private $dbUser;
	private $dbPwd;
	private $dbName;
	private $con;
	private $tableName;

public function __construct($dbName, $tableName, $host = 'localhost', $dbUser = 'root', $dbPwd = 'root')
{
$this->host = $host;
$this->dbUser = $dbUser;
$this->dbPwd = $dbPwd;
$this->dbName = $dbName;
$this->tableName = $tableName;

$con = $this->linkDB($host, $dbUser, $dbPwd, $dbName);
}

//链接数据库
public function linkDB()
{
$conn = mysqli_connect($this->host, $this->dbUser, $this->dbPwd, $this->dbName);
return $conn;
}

//执行语句
//查询
public function sqlDB()
{
$sql = "select * from " . $this->tableName;
$res = mysqli_fetch_assoc($this->query($sql));
return $res;
}
//增加
public function inst($arr)
{
$arr2 = null;
if (is_array($arr)) {
foreach ($arr as $k => $v) {
$arr2 .= "'" . $v . "'" . ",";
}
} else {
echo '不是数组';
}
$sql = "insert into {$this->tableName} value(" . substr_replace($arr2, '', strlen($arr2) - 1, strlen($arr2)) . ")";
$this->Query($sql);
}
//删除
public function del($idName, $id)
{
$sql = "delete from {$this->tableName} where {$idName}='{$id}'";
$this->Query($sql);
}
//修改
public function Update($arr,$idName, $id){
$arr2 = null;
if (is_array($arr)) {
foreach ($arr as $k => $v) {
$arr2 .= $k."="."'".$v."'".',';
}
} else {
echo '不是数组';
}
$sql = "update {$this->tableName} set " . substr_replace($arr2, '', strlen($arr2) - 1, strlen($arr2)) . " where {$idName}='{$id}'";
$this->Query($sql);
}
public function Query($sql)
{
$query = mysqli_query($this->linkDB(), $sql);
return $query;
}
}