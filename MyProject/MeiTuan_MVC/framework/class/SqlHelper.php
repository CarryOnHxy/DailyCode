<?php
class SqlHelper
{
    private $ip;
    private $username;
    private $password;
    private $database;
    static private $obj;
    static private $con;

    private function __construct($ip,$username,$password,$database) {
        $this->ip = $ip;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
        $this->connect($ip,$username,$password,$database);
    }
    private function connect(){
       self::$con = mysqli_connect($this->ip,$this->username,$this->password,$this->database);
    }
    static public function init($ip,$username,$password,$database){
        if( !self::$obj instanceof SqlHelper){
            self::$obj = new SqlHelper($ip,$username,$password,$database);
            return self::$obj;
        }
        echo 'connect failfully';
    }
    private function query($sql){
        return mysqli_query(self::$con,$sql);
    }
    public function getOne($sql){
       $query = $this->query($sql);
       $oneResult = mysqli_fetch_assoc($query);
       return $oneResult;
    }
    public function getAll($sql){
        $query = $this->query($sql);
        $allResult = [];
        while($result = mysqli_fetch_assoc($query)){
            $allResult[] = $result;
        }
        return $allResult;
    }
    private function __clone(){}
    public function __destruct(){
        mysqli_close(self::$con);
    } 
}

