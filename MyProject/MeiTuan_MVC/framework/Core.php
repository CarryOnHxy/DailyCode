<?php
class Core{
    private $filePath;
    public function __construct()
    {
        spl_autoload_register([__CLASS__,'preload']);
    }
    public function preload($class){
        $this->filePath  = [];
        $this->filePath[] = $_SERVER['DOCUMENT_ROOT']."\\application\\controller\\$class.php";
        $this->filePath[] = $_SERVER['DOCUMENT_ROOT']."\\application\\model\\$class.php";
        $this->filePath[] = $_SERVER['DOCUMENT_ROOT']."\\framework\\class\\$class.php";
        $this->includeFile();
    }
    private function includeFile(){
        foreach($this->filePath as $vlaue){
            if(file_exists($vlaue)) include_once $vlaue;
        }
    }
    public function run(){
        $class = $_REQUEST['c'];
        $method = $_REQUEST['m'];
        $obj = new $class;
        $obj->$method();
    }
}

