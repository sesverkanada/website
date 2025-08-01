<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");



$mysqli = new mysqli("localhost", "lfltvc16_user", "goMjK02NWyqN", "lfltvc16_sesver");




echo json_encode(['status' => 'success', 'message' => 'Form saved!']);






?>