<?php
class Show{
    public function display(){
        include $_SERVER['DOCUMENT_ROOT'].'/application/view/'.$_REQUEST['c'].'.php';
    }
}
