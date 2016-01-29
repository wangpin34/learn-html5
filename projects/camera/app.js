 var video = document.getElementById("video"),
     videoObj = { "video": true };
 navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
 if (navigator.getUserMedia) {
     if (navigator.webkitURL) {
         navigator.getUserMedia(videoObj, function(stream) {
             video.src = window.webkitURL.createObjectURL(stream);
         }, function(error) {
             alert(error);
         });
     } else {
         navigator.getUserMedia(videoObj, function(stream) {
             video.src = window.webkitURL.createObjectURL(stream);
         }, function(error) {
             alert(error);
         });
     }
 } else {
     alert("navigator.getUserMedia  Error");
 }