let getWeather=()=>{
    let city=document.querySelector("#textid").value;

  let url=  "https://api.openweathermap.org/data/2.5/weather?appid=1344c370c18bcee8ada3894799d7331a&units=metric&q="+city;

    
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  
  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    console.log(refjson);
    dispdata(refjson);
  };

  xhr.send();
};

function dispdata(refjson){
if(refjson.name == "undefined"){
    alert("NOT FOUND ")
}
    else{
   document.querySelector("#first").style.display="none";
   document.querySelector("#second").style.display="flex";
   document.querySelector("#cityname").innerHTML="city:"+" "+refjson.name;
   document.querySelector("#tempp").innerHTML="tempp:"+" "+refjson.main.temp;
   document.querySelector("#humidity").innerHTML="humidity:"+" "+refjson.main.humidity;
   document.querySelector("#wind-Speed").innerHTML="Wind-Speed:"+refjson.wind.speed;
   document.querySelector("#main").innerHTML="Status:"+refjson.weather[0].main; 
 
}
}


