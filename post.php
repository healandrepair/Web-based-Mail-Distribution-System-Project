<?php
//Db info
$username = 'root';
$password = 'team13';
$dbName = 'csvData';
$dbHost = "35.201.5.115";
//Connect to db
$conn = mysqli_connect($dbHost, $username, $password,$dbName);
//If the following vars are not null
if (isset($_POST['email'],$_POST['column'],$_POST['spreadSheet'],$_POST['csvValues'],$_POST['lecturer'])) {
  //Set the vars
  $email = $_POST['email'];
  $column = $_POST['column'];
  $spreadSheet = $_POST['spreadSheet'];
  $csvValues = $_POST['csvValues'];
  $lecturer = $_POST['lecturer'];
  //Insert data into the db table
  $sql = "insert into csvData.CSVTable values('$lecturer','$email','$column','$spreadSheet','$csvValues')";
  $run = mysqli_query($conn,$sql) or die("Error " . mysqli_error($conn));
  echo "success";

}else{
  echo "fail";
}

//close the connection
mysqli_close($conn);
?>