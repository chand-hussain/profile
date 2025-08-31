function data()
{
    var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var d = document.getElementById("d").value;
var e = document.getElementById("e").value;
var f = document.getElementById("f").value;

if(a =="" || b=="" ||  c=="" || d=="" || e=="" || f=="")
    {
alert("All fields are mandatory.");
return false;
    } else if (c.length <10 || c.length>10) 
        {
            alert("Number should be of 10 digits ! Please enter a valid number.")
            return false;
        } else 
        {
            true;
        }
}
