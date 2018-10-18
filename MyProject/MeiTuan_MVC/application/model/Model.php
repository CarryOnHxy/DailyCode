<?php
class Model{
    public $db;
    public function __construct()
    {
        $this->db = SqlHelper::init('localhost','root','1234','position');
    }
}