function openTab(evt, tabl) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabl).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
document.querySelector('.header-burger').onclick = function() {
    document.querySelector('.header-burger').classList.toggle("active-burger");
    document.querySelector('.header-sm-menu').classList.toggle("active-burger");
};
  