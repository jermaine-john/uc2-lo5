function removed() {
    var parent= document.getElementById("selectHistoryId");
    var child= parent.getElementsByTagName("option")[0];
    parent.removeChild(child);
}