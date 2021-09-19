<?php

$username = 'root';
$password = 'team13';
$dbName = 'csvData';
$dbHost = "34.129.166.167";

$spreadSheet =$_GET["spreadSheet"];
echo $_GET["lecturer"];
$conn = mysqli_connect($dbHost, $username, $password,$dbName);
$sql = "SELECT CsvValues FROM csvData.CsvData Where Spreadsheet = '$spreadSheet'" ;
$result = mysqli_query($conn,$sql) or die("Error " . mysqli_error($conn));

if ($result->num_rows > 0) {
    while( $row = $result->fetch_assoc()) {
      echo $row['CsvValues'];
    }
  } else {
    echo "0 results";
  }
?>