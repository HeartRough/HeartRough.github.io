<?php
$q=isset($_POST['YZH'])? $_POST['YZH']:'';
if(is_array($q)){
    foreach ($q as $val) {
        echo "YZH is ".$val."."."<br>";
    }
}
echo "Yes,You are right. ".$_POST['how'];
?>