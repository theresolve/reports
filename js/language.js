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
  } else {
  }
  return false;
});


