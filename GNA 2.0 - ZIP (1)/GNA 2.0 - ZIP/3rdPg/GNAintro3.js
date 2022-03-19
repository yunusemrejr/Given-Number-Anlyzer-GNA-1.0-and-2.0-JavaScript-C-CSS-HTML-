function bodyNotVisible() {

    document.getElementById('theRealBody').style.display='none';





document.getElementById('iframeForIntroHTML').style.display='';

    }



function bodyVisible() {

    document.getElementById('theRealBody').style.display='';





document.getElementById('iframeForIntroHTML').style.display='none';

    }




  setTimeout(bodyNotVisible, 40);
  setTimeout(bodyVisible, 3000);



