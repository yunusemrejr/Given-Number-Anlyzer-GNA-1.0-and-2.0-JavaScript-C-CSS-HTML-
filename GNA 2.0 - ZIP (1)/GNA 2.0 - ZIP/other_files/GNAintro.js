function bodyNotVisible() {

    document.getElementById('h12dot0').style.display='none';
    document.getElementById('popnsrc').style.display='none';


    document.getElementById('hrTop').style.display='none';

  document.getElementById('restartbtn').style.display='none';

  document.getElementById('bdy').style.display='none';

document.getElementById('iframeForIntroHTML').style.display='';
document.body.style.backgroundColor = "black";
document.body.style.borderColor ="black";

    }



function bodyVisible() {


      document.getElementById('h12dot0').style.display='';
    document.getElementById('popnsrc').style.display='';
  document.getElementById('hrTop').style.display='none';

document.getElementById('restartbtn').style.display='';
document.getElementById('iframeForIntroHTML').style.display='none';
    document.getElementById('bdy').style.display='';


document.body.style.backgroundColor = "#051DB5";
document.body.style.borderColor ="white";

    }




  setTimeout(bodyNotVisible, 40);
  setTimeout(bodyVisible, 2000);



