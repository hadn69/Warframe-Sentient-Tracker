var xmlhttp = new XMLHttpRequest();

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        if (obj.active == 0) {
            var date = new Date(obj.expiry);
            var eta = addMinutes(date, 185);
            document.getElementById("status").innerHTML = "No";
            document.getElementById("status").style.color = "red";
            document.getElementById("mission").innerHTML = "";
            document.getElementById("expires").innerHTML = "ETA of next encounter: </br>" + eta.toTimeString();
        } else {
            document.getElementById("status").innerHTML = "Yes";
            document.getElementById("status").style.color = "green";
            document.getElementById("mission").innerHTML = obj.mission.node;
            var date = new Date(obj.expiry);
            document.getElementById("expires").innerHTML = "Expires: </br>" + date.toTimeString();
        }
    }
};
xmlhttp.open("GET", "https://api.warframestat.us/pc/sentientOutposts", true);
xmlhttp.send();