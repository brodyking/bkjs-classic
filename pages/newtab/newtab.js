function currentTime() {
    var today = new Date();
    var datetd = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if (hh === 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }
  
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
  
    let time = hh + ":" + mm + " " + session;
    document.getElementById("time").innerHTML = time;
    let t = setTimeout(function () { currentTime() }, 1000);
  }
  currentTime();

if (localStorage.getItem('newtabUsername') == null) {
  localStorage.setItem('newtabUsername','Anon')
}

document.getElementById('newtabUsername').innerHTML = localStorage.getItem('newtabUsername');

function newtabUsernameChange() {
  var newtabUsernameChangeTempVar = prompt("What is the name you would like to go by?");
  localStorage.setItem('newtabUsername',newtabUsernameChangeTempVar);
  location.reload();
}

function newtabOptions() {
  document.getElementById('optionsPrev').style.display = "none";
  document.getElementById('options').style.display = "block";
}

if (localStorage.getItem('newtabDracula') == null) {
  localStorage.setItem('newtabDracula','False')
}

if (localStorage.getItem('newtabDracula') == 'True') {
  document.body.style.backgroundColor = "#21222c";
  document.getElementById('newtabUsername').style.color = "#bd93f9";
  document.getElementById('youtube').style.color = "#bd93f9";
  document.getElementById('outlook').style.color = "#bd93f9";
  document.getElementById('replit').style.color = "#bd93f9";
  document.getElementById('google').style.color = "#bd93f9";
  document.getElementById('4chan').style.color = "#bd93f9";
  document.getElementById('github').style.color = "#bd93f9";
  document.getElementById('optionsopenlink').style.color = "#bd93f9";
  document.getElementById('optionsopenlink').style.opacity = "10%";
  document.getElementById('options1').style.color = "#bd93f9";
  document.getElementById('options2').style.color = "#bd93f9";

}

function newtabDraculaToggle() {
  if (localStorage.getItem('newtabDracula') == 'True') {
    localStorage.setItem('newtabDracula','False')
  } else {
    alert('Make sure you have dark mode enabled in your devices settings.')
    localStorage.setItem('newtabDracula','True');
  }
  location.reload();
}
