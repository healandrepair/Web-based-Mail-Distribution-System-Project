<?php

$username = 'root';
$password = 'team13';
$dbName = 'csvData';
$dbHost = "34.129.166.167";

$conn = mysqli_connect($dbHost, $username, $password,$dbName);
if (isset($_POST['email'],$_POST['column'],$_POST['spreadSheet'],$_POST['csvValues'],$_POST['lecturer'])) {
  $email = $_POST['email'];
  $column = $_POST['column'];
  $spreadSheet = $_POST['spreadSheet'];
  $csvValues = $_POST['csvValues'];
  $lecturer = $_POST['lecturer'];
  $sql = "insert into CsvData values('$lecturer','$email','$column','$spreadSheet','$csvValues')";
  $run = mysqli_query($conn,$sql) or die("Error " . mysqli_error($conn));
  echo "success";

}else{
  echo "fail";
}


?>