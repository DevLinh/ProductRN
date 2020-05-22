<?php
// Nhận dữ liệu gửi lên từ React Native
$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
// Kiểm tra tính hợp lệ của dữ liệu
if (!isset($obj['phone']) || $obj['phone'] == '') {
    $result = [
        'error' => 'Vui lòng nhập số điện thoại',
    ];
    echo json_encode($result);
    return;
}

$name = $obj['name'];
$phone = $obj['phone'];
$address = $obj['address'];

$bill_detail = $obj['bill_detail'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "api";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Thực thi SQL lưu vào database
$sql = "INSERT INTO `bill` (`id`, `name`, `phone`, `address`, `bill_detail`) VALUES (NULL, '" . $name . "', '" . $phone . "', '" . $address . "', '" . $bill_detail . "');";
$conn->query($sql);
$conn->close();

$result = [
    'name' => $name,
    'phone' => $phone,
    'address' => $address,
    'bill_detail' => $bill_detail,
    ];
echo json_encode($result);