<?php

class ChangeCity
{
    private $data;
    private $province;
    private $city;
    private $model;
    private $result;
    public function __construct()
    {
        $this->model = new Position;
    }
    private function getProvince()
    {
        $sql = 'select provice_id,provice_name from j_position_provice';
        $this->province = $this->model->getData($sql);
    }
    private function getCity()
    {
        $sql = 'select  province_id,city_name from j_position_city';
        $this->city = $this->model->getData($sql);
    }
    public function getChina()
    {
        $this->getProvince();
        $this->getCity();
        $provinces = [];
        foreach ($this->province as $provinceData) {
            $province['province_name'] =$provinceData['provice_name'];
            $cities = [];
            foreach ($this->city as $city) {
                if (in_array($provinceData['provice_id'], $city)) {
                    $cities[] = $city['city_name'];
                }
            }
            $province['province_cities'] = $cities;
            $provinces[] = $province;
        }
        $this->outResult($provinces);
    }
    public function searchCity()
    {
        if (!isset($_REQUEST['key'])) {
            $result[] = '无搜索结果';
        } else {
            $key = $_REQUEST['key'];
            $sql = 'select city_name from j_position_city where city_name like "%' . $key . '%"';
            $result = $this->model->getData($sql);
        }
        $this->outResult($result);
    }
    private function outResult($result)
    {
        echo json_encode($result);
    }
}