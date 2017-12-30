function checkForm()
{
//fetching values from all input fields and storing them in variables
    var firstname = document.getElementById("firstname1").value;
    var lastname = document.getElementById("lastname1").value;
    var mobile = document.getElementById("mobile1").value;
    var email = document.getElementById("email1").value;
    var address = document.getElementById("address1").value;    
	
//Check input Fields Should not be blanks.
    if (firstname == '' ||lastname == '' || mobile == '' || email == '' || address == '') 
    {
        alert("Fill All Fields");
    }

    else
    {
	
	//Notifying error fields
	var firstname1 = document.getElementById("firstname1");
    
    var email1 = document.getElementById("email1");
    var mobile1 = document.getElementById("mobile1");
    var address1 = document.getElementById("address1");
	
	//Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
        if (firstname1.innerHTML == 'Must be 5+ letters' ||lastname1.innerHTML == 'Must be 2+ letters' || mobile1.innerHTML == 'Invalid mobile' || email1.innerHTML == 'Invalid email' || address1.innerHTML == 'Invalid address') 
        {
            alert("Fill Valid Information");
        }
        else 
        {
		//Submit Form When All values are valid.
            document.getElementById("myForm").submit();
        }
    }
}

//AJAX Code to check  input field values when onblur event triggerd.
function validate(field, query)
{
	var xmlhttp;
	
if (window.XMLHttpRequest)
  {// for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }	
  
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState != 4 && xmlhttp.status == 200)
        {
            document.getElementById(field).innerHTML = "Validating..";
        }
        else if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById(field).innerHTML = xmlhttp.responseText;
        }
        else if
        {
            document.getElementById(field).innerHTML = "Error Occurred.";
        }
    }
    xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
    xmlhttp.send();
}