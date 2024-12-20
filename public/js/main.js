
const city = document.getElementById("city");
const searchbtn = document.getElementById("searchbtn");
const city_name = document.getElementById("city_name");
const tempreal = document.getElementById("tempreal");
const temp_icon = document.getElementById("temp_icon");
const datahide = document.querySelector(".middel_layer");

const getinfo = async (evevt)=>{
    evevt.preventDefault();
let cityval = city.value;
   if(cityval === ""){
     city_name.innerText=`Please write the name before search`;
     datahide.classList.add("data_hide");
}else{
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d77566d1718e25129a8c57df3db5adfd`;
    const responce = await fetch(url);
    const data = await responce.json();
    const dataarray = [data];
    city_name.innerText = `${dataarray[0].name}, ${dataarray[0].sys.country}`;
    tempreal.innerText = dataarray[0].main.temp;
    const tempicon = dataarray[0].weather[0].main;
     
    if(tempicon == "Clear"){
        temp_icon.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
    }else if(tempicon == "Clouds"){
        temp_icon.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>";
    }else if(tempicon == "Rain"){
        temp_icon.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'></i>";
    }else{
        temp_icon.innerHTML = "<i class = 'fas fa-sun' style = 'color:#009ad8;'></i>";
    }
    datahide.classList.remove("data_hide");



    // console.log(dataarray); 
}catch{
    city_name.innerText=`Please write the name properly`;
    datahide.classList.add("data_hide");
}
}

}
searchbtn.addEventListener('click', getinfo);

const getCurrentDay = ()=>{
    var weekDays = new Array(7);
    weekDays[0]='Sunday';
    weekDays[1]= 'Monday';
    weekDays[2]= 'Tuesday';
    weekDays[3]= 'Wednesday';
    weekDays[4]= 'Thursday';
    weekDays[5]= 'Friday';
    weekDays[6]= 'Saturday';


    let currentTime = new Date();
    let days = weekDays[currentTime.getDay()];
    let day = document.getElementById("day");
     day.innerText =  days;
    };
    getCurrentDay();

    const getCrrentTime = ()=>{
        var mounth = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
      ];
      var now = new Date();
      var month = mounth[now.getMonth() + 1];
      var date = now.getDate();
  
      let hours = now.getHours();
      let mins = now.getMinutes();
  let sec = now.getSeconds();
      let periods = "AM";
      
      if (hours > 11){
        periods = "PM";
        if(hours > 11) hours -= 12;
      }
      if(mins<10){
        mins = "0" + mins;
      }
     
    //   return `${month}${date} | ${hours}:${mins}${periods}`;
      const today_data =  document.getElementById("today_data");
      today_data.innerText = `${date},${month} | ${hours} : ${mins} : ${sec} ${periods}`
      setTimeout("getCrrentTime()",1000);
      };
   getCrrentTime();
