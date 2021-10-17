<?php

/* Checks lecturer name to prevent sql injection */
function checker($s)
{
  $result = array();
  foreach(str_split($s) as $ch)
    {
      if ($ch == "\\" || $ch == "%" || $ch == "_" || $ch == "=" || $ch == "'")
        {
          $result[] = "\\";
        } 
      $result[] = $ch;
    } 
  return
      implode("", $result);
}


//

//Db user
$username = 'root';
$password = 'team13';
//Db
$dbName = 'csvData';
$dbHost = "35.201.5.115";

//Checks the lecturer's name for sql injection
$lecturer1 =$_GET["lecturer"];
$lecturer=checker($lecturer1);

$spreadsheet= $_GET["spreadsheet"];

//Connect to db server and db
$conn = mysqli_connect($dbHost, $username, $password, $dbName);

//Select data from db table based on lecturer's name and spreadsheet
$sql = "SELECT * FROM csvData.CSVTable Where Lecturer = '$lecturer' and spreadsheet = '$spreadsheet'" ;
$result = mysqli_query($conn,$sql) or die("Error " . mysqli_error($conn));
$results = mysqli_fetch_assoc($result);
$resultstring = $results['CsvValues'];

while($row = $result->fetch_assoc()) {
  //format of the data response string.
  echo $row["Email"],":",$row["Column"], "=", $row["CsvValues"], "\n";
}

//close the connection
mysqli_close($conn);

?>