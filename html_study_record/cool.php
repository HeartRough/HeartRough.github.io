<!doctype HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>大佬的玉照</title>
    <style>
    body{
        font-family:"Comic Sans MS", cursive, sans-serif;
    }
    mark{
        background-color:#ddd;
    }
    </style>
</head>
<body>
<?php
$q=isset($_POST['YZH'])? $_POST['YZH']:'';
if(is_array($q)){
    foreach ($q as $val) {
        echo "YZH is ".$val."."."<br>";
    }
}
echo "Yes,You are right. ".$_POST['how']."<br>";
?>
<mark>恭喜你发现了宝藏!!!</mark><br>
<img src="http://xinke.xyz/pictures/YZH_DL.jpg" alt="xinke.xyz" width="1080" height="1440">
</body>
</html>
