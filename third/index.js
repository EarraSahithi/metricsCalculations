
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
        const areaOfCircleBefore = Math.PI * radius * radius;
        const areaOfCircle=areaOfCircleBefore.toFixed(2);
        console.log("areaOfCircle :",areaOfCircle);
        response.write(`Area of circle : ${areaOfCircle}`);
        response.end();
    }
    else{
        response.write("still running");
        response.write("you can send request now");
        response.end();
    }
})
.listen(8080);