<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossorigin="anonymous">
    <link rel="stylesheet" href="../public/css/index.css">
    <script src='../public/js/jquery-3.3.1.min.js'></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
    <script src="../public/js/angular.min.js"></script>
    <script src='../public/js/angular-route.js'></script>
    <title>Document</title>
</head>

<body id='header' ng-app='app'>
   <div ng-controller="method"></div>
   <div ng-view></div>
   <script src='../public/js/route.js'></script>
   <script src="../public/js/method.js"></script>
   <script src='../public/js/changeCity.js'></script>
   <script src='../public/js/jump.js'></script>
   
</body>

</html>