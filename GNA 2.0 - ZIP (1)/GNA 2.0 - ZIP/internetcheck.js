


function internetChck() {

      if (navigator.onLine) {



       console.log('user internet connection status: online according to browser data, might be wrong');




                            }



                    else {

                console.log('user internet connection status: offline according to browser data, might be wrong');
document.getElementById('divOneofTheMains').style.display='none';
  document.getElementById('bdy').style.display='none';

document.write('<p style="font-family:courier;font-size:20px;"><b>G.N.A. 2.0 needs a stable internet connection in order to work properly. Please check your internet connection and refresh this page when you are connected to internet.</b></p>');


                         }

}




 








           
