const http= require("http");
const url= require("url");

http.
createServer(function(request,response){
    const path=request.url;
    const dataFromUrl=url.parse(path,true).query;
    
    //creating routes 
    if(path.includes("metrics")){
        console.log("radius Value:",dataFromUrl.radius);
        const radius=dataFromUrl.radius;
        const volumeOfSpereBefore = (4/3) * Math.PI * Math.pow(radius, 3);;
        const volumeOfSpere=volumeOfSpereBefore.toFixed(2);
        console.log("volumeOfSpere :",volumeOfSpere);
        response.write(`volume Of Spere : ${volumeOfSpere}`);
        response.end();
    }
    else{
        response.write("still running");
        response.write("you can send request now");
        response.end();
    }
})
.listen(8080);