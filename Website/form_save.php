<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

$mysqli = new mysqli("localhost", "lfltvc16_user", "goMjK02NWyqN", "lfltvc16_sesver");
$mysqli->set_charset("utf8mb4");


$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$statu = addslashes($data['statu']);
$sure = addslashes($data['duration']);
$age = $data['age'];
$gender = addslashes($data['gender']);
$gender_extra = addslashes($data['gender_extra']);
$gender_son = $gender . " " . $gender_extra;

$languages = $data['languages'];
$canada_edus = addslashes($data['canada_edus']);
$work = addslashes($data['work']);
$child = addslashes($data['child']);
$organization = addslashes($data['organization']);

$edu = addslashes($data['edu']);
$edu_extra = addslashes($data['edu_extra']);
$edu_son = $edu . " " . $edu_extra;

$occupation = addslashes($data['occupation']);
$occupation_others = addslashes($data['occupation_others']);
$occupation_son = $occupation . " " . $occupation_others;

$city = addslashes($data['city']);
$city_extra = addslashes($data['city_extra']);
$city_son = $city . " " . $city_extra;

$marital = addslashes($data['marital']);
$marital_extra = addslashes($data['marital_extra']);
$marital_son = $marital . " " . $marital_extra;

$volunteer = $data['volunteer'];
$sponsor = $data['sponsor'];
$volunteer_details = addslashes($data['volunteer_details']);
$expectation = addslashes($data['expectation']);
$comment = addslashes($data['comment']);
$get_email = $data['get_email'];

if($volunteer == "true"){
    $volunteer_son = "Evet";
}else{
    $volunteer_son = "Hayır";
}

if($sponsor == "true"){
    $sponsor_son = "Evet";
}else{
    $sponsor_son = "Hayır";
}

 $tar = time();



$sql = "INSERT INTO records ( email, statu, sure, age, gender, languages,educations, canada_edus, work, occupation, city, marital, child, organization, volunteer, sponsor, 
volunteer_details,expectation, comment, get_email, tarih) 
VALUES ('$email', '$statu', '$sure' , '$age', '$gender_son', '$languages', '$edu_son', '$canada_edus', '$work', '$occupation_son', 
'$city_son', '$marital_son', '$child', '$organization', '$volunteer_son', '$sponsor_son', 
'$volunteer_details', '$expectation', '$comment', '$get_email', '$tar') ";




$mysqli->query($sql);
echo json_encode(['status' => 'success', 'message' => 'Form saved!']);
$mysqli->close();

?>