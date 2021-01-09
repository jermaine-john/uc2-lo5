
function mySubmitt() {
var newLists = document.createElement("option");
var a = document.getElementById("selectHistoryId");

a.appendChild(newLists);
var myhistory=document.getElementById("result").value;


newLists.innerHTML= myhistory;

}
