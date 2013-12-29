$(function () {
  $('#french').click(function() { 
    if (location.pathname.split('/')[2] && location.pathname.split('/')[3]) {
      window.location = "/fr/" + location.pathname.split('/')[2] + "/" + location.pathname.split('/')[3];
    } else {
      window.location = "/fr/";
    }
    return false;
  });
});

$(function () {
  $('#english').click(function() { 
    if (location.pathname.split('/')[2] && location.pathname.split('/')[3]) {
      window.location = "/en/" + location.pathname.split('/')[2] + "/" + location.pathname.split('/')[3];
    } else {
      window.location = "/";
    }
    return false;
  });
});

$(function () {
  if (location.pathname.split('/')[3] == "introduction") {
    $("#introduction").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "lra-command-structure") {
    $("#lra-command-structure").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "lra-force-capacity") {
    $("#lra-force-capacity").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "congo") {
    $("#congo").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "car") {
    $("#car").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "about") {
    $("#about").addClass("active-nav-item")
  } else {
    return false;
  }
  return false;
});


