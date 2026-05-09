<!doctype HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>YZH_DL</title>
    <style>
    body{
        font-family:"Comic Sans MS", cursive, sans-serif;
        font-size:50px;
        background-image:url("..//pictures/dark_souls_three.jpg");
        /* background-size:700px auto; */
        background-repeat:no-repeat;
    }
    mark{
        background-color:#ddd;
    }
    </style>
</head>
<body>
    <p style="text-align:center;text-weight:border;color:white">
        <?php
        $q=isset($_POST['YZH'])? $_POST['YZH']:'';
        if(is_array($q)){
            foreach ($q as $val) {
                echo "YZH is ".$val."."."<br>";
            }
        }
        if($_POST["how1"]!=""){echo $_POST["how1"]."<br>";}
        if($_POST["how2"]!=""){echo $_POST["how2"]."<br>";}
        ?>
    </p>
<!-- <mark>恭喜你发现了宝藏!!!</mark><br>
<img src="http://xinke.xyz/pictures/YZH_DL.jpg" alt="YZH_DL.jpg" width="1080" height="1440"> -->
</body>
</html>
