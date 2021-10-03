<?php

$username = 'root';
$password = 'team13';
$dbName = 'csvData';
$dbHost = "34.129.166.167";

$lecturer =$_GET["lecturer"];
$conn = mysqli_connect($dbHost, $username, $password,$dbName);
$sql = "SELECT * FROM csvData.CsvData Where Lecturer = '$lecturer'" ;
$result = mysqli_query($conn,$sql) or die("Error " . mysqli_error($conn));
$results = mysqli_fetch_assoc($result);
$resultstring = $results['CsvValues'];

while($row = $result->fetch_assoc()) {
  echo $row["Email"],":",$row["Column"], "=", $row["CsvValues"], "\n";
}


echo $resultstring;

?>