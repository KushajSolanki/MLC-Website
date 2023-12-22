function openNav() {
  if (window.innerWidth <= 600) {
    document.getElementById("sidebar").style.width = "100%";
    } else {
   
      document.getElementById("sidebar").style.width = "250px";
  }  
}
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  }