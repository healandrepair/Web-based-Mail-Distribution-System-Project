<?php
function checker($s)
/* checks lecturer name to prevent sql injection */
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

$username = 'root';
$password = 'team13';
$dbName = 'csvData';
$dbHost = "34.129.166.167";

$lecturer1 =$_GET["lecturer"];
$lecturer=checker($lecturer1);
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