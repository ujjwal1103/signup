console.log("Hi programmers");

function valid(){
    var fname = document.Myform.fname.value;
    var lname = document.Myform.lname.value;
    var email = document.Myform.email.value;
    var password = document.Myform.password.value;
    var cpassword = document.Myform.cpassword.value;
    var ln = document.getElementById("lname");
    var fn = document.getElementById("fname");
    var em = document.getElementById("email");
    var ps = document.getElementById("pass");
    var cps = document.getElementById("cpass");

    if(fname ==null|| fname ==""){
        alert("First Name cannot be empty")
        return false;
    }
    
    if(lname ==null|| lname ==""){
        alert("Last Name cannot be empty")
        return false;
    }
    else{
        ln.innerHTML = "done";
        ln.style.color = "green";
        
    }
    if(email ==null|| email ==""){
        em.innerHTML = "please filled with Email Address";
        return false;
    }
    else{
        em.innerHTML = "done";
        em.style.color = "green";
        
    }
    if(password.length < 6 || password == ""){
        ps.innerHTML = "password should be grater than 6 character and cannot be empty";
        return false;
    }
    else{
        ps.innerHTML = "done";
        ps.style.color = "green";
        
    }
    if(password != cpassword){
        cps.innerHTML = "password not matched";
        return false;
    }
    else{
        cps.innerHTML = "done";
        cps.style.color = "green";
        
    }
    
}