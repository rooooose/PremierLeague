<?php

$curl = curl_init();


$_GET['id']=(int)$_GET['id'];
$id=$_GET['id'];


curl_setopt_array($curl, array(
  CURLOPT_URL => "http://api.football-data.org/v2/teams/".$id,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
  CURLOPT_HTTPHEADER => array(
    "x-auth-token: e5b6726b819e4b72ab592afb5cc3f151"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);


curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}



