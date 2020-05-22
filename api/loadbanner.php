<?php

//Khai báo kết nối
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "api";

//Khởi tạo kết nối
$connection = new mysqli($servername, $username, $password, $dbname);

//Kiểm tra kết nối
if($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$query = "SELECT * FROM banner";

$result = $connection->query($query);

//Khởi tạo mảng rỗng
$books = [];

if($result->num_rows > 0) {
    //Lần lượt lấy dữ liệu từ result đưa vào mảng books
    while($row = $result->fetch_assoc()) {
        $books[] = $row;
    }
} else {
    echo "0 results";
}
$connection->close();

echo json_encode($books);