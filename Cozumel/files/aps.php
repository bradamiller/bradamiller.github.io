<?php

try {

	$url = $_POST["url"];
	// $data_string = $_POST["data_string"];
	// echo $data_string;
	// $data_string = str_replace("\\", "", $data_string);
	$data = array("streamCtag" => null); 
	$data_string = json_encode($data);
	// echo $url;
	// echo $data_string;

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	// curl_setopt($ch, CURLOPT_VERBOSE, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 60); //timeout in seconds
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json',
		'Content-Length: ' . strlen($data_string))
	);

	$result = curl_exec($ch);
	// var_dump(curl_getinfo($ch));
	curl_close($ch);
	echo $result;

} catch(Exception $e) {
	echo 'Exception: ' .$e->getMessage();
	var_dump(curl_getinfo($ch));
}

?>