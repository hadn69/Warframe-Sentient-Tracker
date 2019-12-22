var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        if (obj.active == 0) {
            document.getElementById("status").innerHTML = "No";
            document.getElementById("status").style.color = "red";
            document.getElementById("mission").innerHTML = "";
            document.getElementById("expires").innerHTML = "";
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