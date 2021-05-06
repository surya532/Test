
// on create account page
// to validate password creation
function matchPassword(form) {  
   pw1 = form.pswd1.value;
   pw2 = form.pswd2.value;

    if(pw1 != pw2)  
    {   
      alert("Passwords did not match");  
      return false;
    } else {  
      alert("Account created successfully");  
      return true;
    }  
  }

//on app 1 and 2 pages
function appAlert()
{
    alert("Information saved. Proceeding to next part...");
}

