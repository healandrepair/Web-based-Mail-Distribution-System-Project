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

//Db info
$username = 'root';
$password = 'team13';
$dbName = 'csvData';
$dbHost = "35.201.5.115";
//Get lecturer's name & check for sql injection
$lecturer1 =$_GET["lecturer"];
$lecturer=checker($lecturer1);
//Connect to db
$conn = mysqli_connect($dbHost, $username, $password,$dbName);
//Select data from db table based on lecturer's name
$sql = "SELECT * FROM csvData.CSVTable Where Lecturer = '$lecturer'" ;
$result = mysqli_query($conn,$sql) or die("Error " . mysqli_error($conn));
$results = mysqli_fetch_assoc($result);
$resultstring = $results['CsvValues'];
//fetch a result row as an associative array (i.e. dict)
while($row = $result->fetch_assoc()) {
  //format of the data response string.
  echo $row["Email"],":",$row["Column"], "=", $row["CsvValues"], "\n";
}

echo $resultstring;
//close the connection
mysqli_close($conn);

?>