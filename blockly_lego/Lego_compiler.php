<?php
echo $_POST["param"];
$java_str=str_replace("$","+",$_POST["param"]);
$blockly_path = getenv('LEGO_HOME');
echo file_put_contents($blockly_path."Lego_rcx_code.java",$java_str);
echo exec($blockly_path.'blockly_javac.bat');
echo exec($blockly_path.'blockly_java.bat');
?>