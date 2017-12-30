<?php
$value = $_GET['query'];
$formfield = $_GET['field'];

//Check Valid or Invalid first name when user enters first name in first name input field.
if ($formfield == "firstname") {
    if (strlen($value) < 4) {
        echo "Must be 5+ letters";
    } else {
        echo "<span>Valid</span>";
    }
}

//Check Valid or Invalid last name when user enters last name in last name input field.
if ($formfield == "lastname") {
    if (strlen($value) < 4) {
        echo "Must be 2+ letters";
    } else {
        echo "<span>Valid</span>";
    }
}

//Check Valid or Invalid password when user enters password in password input field.
if ($formfield == "mobile") {
   if (preg_match("/^(09|63)[\d]{9}$/m", $mobile)) {
        echo $mobile;
    } else {
        echo "<span>Strong</span>";
    }
}

//Check Valid or Invalid email when user enters email in email input field.
if ($formfield == "email") {
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $value)) {
        echo "Invalid email";
    } else {
        echo "<span>Valid</span>";
    }
}

//Check Valid or Invalid website address when user enters website address in website input field.
if ($formfield == "address") {
    if(preg_match("/^[0-9a-zA-Z_]{5,}$/", $value) === 0) {
       echo "Must be 10+ letters";
    } else {
        echo "<span>Valid</span>";
    }
}

?>