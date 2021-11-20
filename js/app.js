// UI

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cfmpassword=document.getElementById("cfmpassword");

function showerror(input,message){

	const formcontrol = input.parentElement;
	formcontrol.className = "form-control error";

	const small = formcontrol.querySelector("small");
	small.innerText = message;
};


function showsuccess(input){

	const formcontrol = input.parentElement;
	formcontrol.classList.remove("error");
	formcontrol.classList.add("success");
}

  // Start Of Method II

// Check Required Field
function checkrequired(inputarrs){
	// console.log(inputarrs);

	inputarrs.forEach(function(inputarr){
		
		if(inputarr.value === ''){
			showerror(inputarr,`${getfieldname(inputarr)} is required`);
		}else{
			showsuccess(inputarr);
		}

	})

}

// Get Field Name
function getfieldname(inputarr){
	return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}

// Check Username and Password Length
function checklength(input,min,max){
	if(input.value.length < min){
		showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
	}else if(input.value.length > max){
		showerror(input,`${getfieldname(input)} must be less than ${max} characters`);
	}else{
		showsuccess(input);
	}
}

// Check Email is valid
function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());

    if(re.test(input.value)){
    	showsuccess(input);
    }else{
    	showerror(input,`Email is not valid`);
    }
}

//Check Password Match
function checkpasswordsmatch(input1,input2){
	if(input1.value !== input2.value){
		showerror(input2,"Password does not match");
	}
}


// Event Listener (Method II)

form.addEventListener("submit",function(e){
	// console.log("hay");
	e.preventDefault();

	checkrequired([username,email,password,cfmpassword]);

	checklength(username,3,15);
	checklength(password,6,25);

	checkemail(email);

	checkpasswordsmatch(password,cfmpassword);

});
