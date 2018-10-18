{{position}}
<div class="sub-container container center-block">

    <div class="check">
        <div class='tips'>按省份选择:</div>
        <div class="btn-group ">
            <button class="btn btn-default dropdown-toggle choose" type='button' data-toggle="dropdown">{{currentProvince}}
                <span class="caret"></span>
            </button>
            <div class="row dropdown-menu ">
                <p class='title'>省份</p>
                <div class="col-lg-4" ng-repeat='v in data' ng-click="clickProvince(v)">
                    <span >{{v.province_name}}</span>
                </div>
            </div>
        </div>

        <div class="btn-group choose">
            <button class="btn btn-default dropdown-toggle choose" type='button' data-toggle="dropdown" ng-disabled="clicked">{{currentCity}}
                <span class="caret"></span>
            </button>
            <div class="row dropdown-menu ">
                <p class='title'>城市</p>
                <div class="col-lg-4" ng-repeat='v in cities' ng-click="clickCity(v)">
                    <span ng-click="clickCity(v)">{{v}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class='search'>
        <div class='tips'>直接搜索:</div>
        <input type="text" name='search' ng-model='key'>
        <ul class='suggest-city-wapper ' ng-hide="searchResult==''?true:false">
            <li ng-repeat="v in searchResult">{{v.city_name}}</li>
        </ul>
    </div>
    <hr>

    <div class='list' ng-repeat="v in data">
        <div class='list-info'>
            <div class="provinceName" ng-click="clickProvince(v)">{{v.province_name}}</div>
            <div class='cityName' >
              <div ng-repeat="v in v.province_cities" ng-click="clickCity(v)">{{v}}</div>
            </div>
        </div>
        <!-- <span ng-repeat="v in v.province_cities">{{v}}</span> -->
        <hr>
    </div>