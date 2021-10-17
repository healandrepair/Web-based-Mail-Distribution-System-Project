<?php

$username = 'root';
$password = 'team13';
$dbName = 'csvData';
$dbHost = "35.201.5.115";

$lecturer =$_GET["lecturer"];
$conn = mysqli_connect($dbHost, $username, $password,$dbName);
//Select all unique spreadsheets of the lecturer
$sql = "SELECT DISTINCT Spreadsheet FROM csvData.CSVTable Where Lecturer = '$lecturer'" ;

$result = mysqli_query($conn,$sql) or die("Error " . mysqli_error($conn));

$results = mysqli_fetch_assoc($result);
if ($results != null){
  $resultstring = $results['Spreadsheet'];
  while($row = $result->fetch_assoc()) {
    echo $row["Spreadsheet"], ",";
  }
  echo $resultstring;
}
?>