function tabAnnouncements(tabElement){
    if(tabElement == document.getElementById("websiteAnnouncements")){
        document.getElementById("translatorAnnouncements").removeAttribute("class");
        document.getElementById("websiteAnnouncements").setAttribute("class", "active");
    }
    else{
        document.getElementById("websiteAnnouncements").removeAttribute("class");
        document.getElementById("translatorAnnouncements").setAttribute("class", "active");
    }
}