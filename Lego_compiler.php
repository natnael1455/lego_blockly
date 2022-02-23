<?php
// http response header setting for the php
header("Content-Type: application/json; charset=UTF-8");  
$myObj = new stdClass(); 

//accepting the json parmenters of the post request
$obj = json_decode($_POST["param"], false); 

if ($obj->type == "write") {
	// it will open the Lego_rcx_code.java file if it exits and or create a new one
       $lego_source_file= fopen("Lego_rcx_code.java", "w") or die("Unable to open file!");

    //acceptting the code from the browser blocly program
    
      $java_str=str_replace("$","+",$obj->table);

	// it write the code to the file 
	fwrite($lego_source_file,$java_str);
	
	// it will close the file
		fclose($lego_source_file);
		
	$myObj->code_file = "file is written";
	 
	
    }
elseif($obj->type == "compile") {
	$ans=shell_exec ("/var/www/html/blockly_javac.sh");
	
		$myObj->compile =$ans;
	
}
elseif($obj->type == "load"){
	
	if (file_exists('Lego_rcx_code.class')) {
            $ans =shell_exec ("/var/www/html/blockly_java.sh");
	    $myObj->loaded= $ans;
	    unlink('Lego_rcx_code.class');
        }else {
		$myObj->loaded= "complied with error";
            
        }
	
	
}
 elseif($obj->type == "save"){
	 
 // it will open the Lego_rcx_code.java file if it exits and or create a new one
       $lego_source_file= fopen("Lego_rcx_code.java", "w") or die("Unable to open file!");

    //acceptting the code from the browser blocly program
    
      $java_str=str_replace("$","+",$obj->table);

	// it write the code to the file 
	fwrite($lego_source_file,$java_str);
	
	// it will close the file
		fclose($lego_source_file);
	}
elseif($obj->type == "read"){
	 $lego_source_file= fopen("Lego_rcx_code.java", "r") or die("Unable to open file!");
	 $read=fread($lego_source_file,filesize("Lego_rcx_code.java"));
	 $myObj->code_file = $read;
	 fclose($lego_source_file);
}

$myJSON = json_encode($myObj); 
echo $myJSON; 


?>
