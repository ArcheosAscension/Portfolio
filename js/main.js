function tabAnnouncements(tabElement){
    if(tabElement == document.getElementById("websiteAnnouncements")){
        document.getElementById("translatorAnnouncements").removeAttribute("class");
        document.getElementById("websiteAnnouncements").setAttribute("class", "active");
        document.getElementById("announcementContent2").innerHTML =
        "<div class='announcementTitle' id='announcementTitle2'><a href=''>Title</a></div><div class='announcementDetails' id='announcementDetails2'><p>Time</p><p>Author</p></div>";
        //document.getElementById("announcementFeed2").innerHTML = "";
    }
    else{
        document.getElementById("websiteAnnouncements").removeAttribute("class");
        document.getElementById("translatorAnnouncements").setAttribute("class", "active");
        document.getElementById("announcementContent2").innerHTML =
         "<a href='www.google.com'>test</a>";
        //document.getElementById("announcementFeed2").innerHTML = "";
    }
}

var dropdownopen = false
function dropdownOpen(){
    if (dropdownopen == false){
        document.getElementById("dropdown").style.display = "block";
        document.getElementById("dropdownParent").style.backgroundColor = "#000";
        dropdownopen = true;
    }
    else{
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("dropdownParent").style.backgroundColor = "";
        dropdownopen = false;
    }
}