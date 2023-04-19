	   /* these 2 functions are used to hide and show delivery address or credit card when chossing delivery and pay online option are choosen */
	   function checkDeliveryAddress() {
			var deliveryAddress = document.getElementById("hidden1");
			if (document.getElementById("delivery").checked) {
				deliveryAddress.style.display = "block";
			} else {
				deliveryAddress.style.display = "none";
			}
		}
        function checkCreditCard() {
			var displayCredit = document.getElementById("hidden2");
			if (document.getElementById("pay-online").checked) {
				displayCredit.style.display = "block";
			} else {
				displayCredit.style.display = "none";
			}
		}
		/* this function is used to check if the user has entered valid data on the registration form */
		function validateregistration() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			var password2 = document.getElementById("password2").value;
			var male = document.getElementById("male").checked;
			var female = document.getElementById("female").checked;
			var notsay = document.getElementById("notsay").checked;
			var email = document.getElementById("email").value;
			var flavour = document.getElementById("icecream").value;
			var agreement = document.getElementById("agree").checked;
			var errmsg = "";
			var result = true;
			var numPattern = /^\d+$/;
			var pattern = /^[a-zA-Z ]+$/;
			if (username == "") {
                errmsg += "Please enter your username !\n"
            }

			if (password.length < 9 || password == "") {
                errmsg += "Password must be at least 9 characters long !\n"
            }
			if (password2.length < 9 || password2 == "") {
                errmsg += "Confirmation Password must be at least 9 characters long !\n"
            }
			if (password != password2) {
				errmsg += "Passwords do not match.\n";
				}
			if (male == "" && female == "" && notsay =="") {
				errmsg += "Please choose gender !\n"
			}
			if (email == "") {
                errmsg += "Please enter your email !\n"
            }
			if (email.indexOf('@') == 0 ) {
				errmsg += "Email cannot start with an @ symbol.\n"
				}
				if (email.indexOf('@') < 0 ) {
				errmsg += "Email must contain an @ symbol.\n"
				}
			if (flavour == "") {
                errmsg += "Please choose flavour !\n"
            }
			if (agreement == "") {
				errmsg += "Please agree to terms and conditions !\n"
            }
			if (errmsg != ""){
				alert(errmsg)
				result = false;
			 } 
				return result;
			}
		/* this function is used to valid if the user has entered valid data for the order page*/
		function validateorder() {
			var pickup = document.getElementById("pickup").checked;
			var delivery = document.getElementById("delivery").checked;
			var deliadd = document.getElementById("delivery-address").value;
			var postcode = document.getElementById("postcode").value;
			var billadd = document.getElementById("billing-address").value;
			var number = document.getElementById("contact-number").value;
			var email = document.getElementById("email").value;
			var paypick = document.getElementById("pay-on-pickup").checked;
			var payonl = document.getElementById("pay-online").checked;
			var creinfo = document.getElementById("credit-card-info").value;
			var errmsg = "";
			var result = true;
			var numPattern = /^\d+$/;
			var pattern = /^[a-zA-Z ]+$/;
			if (pickup == "" &&  delivery ==""){
				errmsg += "Please choose pickup or delivery !\n"
			}
			if (delivery && deliadd == "") {
				errmsg += "Please enter your delivery address  !\n"
			  }
			if (postcode.length!= 4 && postcode!=numPattern ) {
                errmsg += "Please enter a valid postcode!\n"
            }
			if (billadd ==""){
				errmsg += "Please enter a bill address !\n"
			}
			if (number.length != 10 && number!=numPattern){
				errmsg += "Please enter your phone number in a correct format !\n"
			}
			if (email ==""){
				errmsg += "Please enter your email !\n"
			}
			if (payonl =="" && paypick ==""){
				errmsg += "Please choose a payment option !\n"
			}
			if (payonl !="" && creinfo == "" ) {
				errmsg += "Please enter your credit card info! \n"
			  }
			if (document.getElementById("visa").checked && creinfo.length != 16 && creinfo!=numPattern ){
				errmsg += "Please enter 16 digits visa number! \n"
			}
			if (document.getElementById("mastercard").checked && creinfo.length != 16 && creinfo!=numPattern){
				errmsg += "Please enter 16 digits mastercard number! \n"
			}
			if (document.getElementById("amex").checked && creinfo.length != 15 && creinfo!=numPattern){
				errmsg += "Please enter 15 digits amex number! \n"
			}
			if (errmsg != ""){
				alert(errmsg)
				result = false;
			 } 
				return result;
		}
		/* this function is used to copy delivery address to billing address if a checkbox is selected */
		function copy(){
			var result = true;
			var errmsg = "";
			var sameaddress = document.getElementById("sameaddress").checked;
			var deliadd = document.getElementById("delivery-address").value;
			if (sameaddress != "" && deliadd != ""){
				document.getElementById("billing-address").value = deliadd;
			}
			if ( sameaddress != "" && deliadd == ""){
				errmsg += "Please enter your delivery addresss !\n";
				result = false;
			}
			if (errmsg != ""){
				alert(errmsg)
				result = false;
			 } 
				return result;
		}
	