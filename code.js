function startFun() {
    //Log for debugging purposes
    console.log("startFun() started");
    //turn Off start button
    document.getElementById("startButton").disabled = true;
    //turn on stop button
    document.getElementById("stopButton").disabled = false;
    //turn off start button
    document.getElementById("myMarquee").start();

}
function stopFun() {
    //Log for debugging purposes
    console.log("stopFun() started");
    //turn off stop button
    document.getElementById("stopButton").disabled = true;
    //Turn on start button
    document.getElementById("startButton").disabled = false;
    //stop marquee from moving
    document.getElementById("myMarquee").stop();

}
