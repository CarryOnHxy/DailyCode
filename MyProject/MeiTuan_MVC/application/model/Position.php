<?php
class Position extends Model
{
    public function getData($sql)
    {
        return $this->db->getAll($sql);
    }
}