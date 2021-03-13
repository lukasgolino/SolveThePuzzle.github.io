//Status constants
var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;
 
//Websocket session 
var session;
 
 
//Init Flashphoner API on page load
function init_api() {
    console.log("init api");
        Flashphoner.init({
        });
}
 
//Connect to WCS server over websockets
function connect() {
    session = Flashphoner.createSession({urlServer: "rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov"}).on(SESSION_STATUS.ESTABLISHED, function(session){       
        console.log("connection established");
        playStream(session);
    });
}
 
//Playing stream with given name and mount the stream into myVideo div element
function playStream() {
    var options = {name:"stream1",display:document.getElementById("myVideo")};    
    var stream = session.createStream(options).on(STREAM_STATUS.PLAYING, function(stream) {
        console.log("playing");
    });
    stream.play();
}