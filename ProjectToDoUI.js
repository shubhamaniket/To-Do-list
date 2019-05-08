window.onload = function()
{
var addevent = document.getElementById("addevent");
var button = document.getElementById("submitevent");
var ulist = document.getElementById("list1");
button.addEventListener("click",function()
{
    var li = document.createElement("li");
    var check = document.createElement("input");
    check.type="button";
    if(addevent.value == '')
    {
        alert("Please Enter Event To Proceed");
    }
    else
    {
        li.appendChild(check);
        li.appendChild(document.createTextNode(addevent.value));
        ulist.appendChild(li);
        check.addEventListener("click",function()
        {
        document.querySelector("li").classList.add("done");
        });
    }
});
}