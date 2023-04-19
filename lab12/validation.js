/* write functions that defines the action for each event */

function validateForm(){
	var message = document.getElementById("message").value
	var studentid = document.getElementById("studentid").value
	errMsg = ""
	result = true
	if (message == ""){
		errMsg += "Please enter your message! \n"
	}
	if (studentid == ""){
		errMsg += "Please enter your student ID! \n"
	}
	if (studentid[0] != 's' ){
		errMsg += "Student ID starts with an s ! \n "
	}
	if (errMsg != ""){
		alert(errMsg)
		result = false
	}
		return result
}



/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
	var msgForm = 	document.getElementById("msgform");

	/* assigns functions to corresponding events */
	msgForm.onsubmit = validateForm;
}

/* execute the initialisation function once the window*/
window.onload = init;
