obj_doc_time=document.getElementById("doc_time");
 
name_month=new Array ("Января","Февраля","Марта", "Апреля","Мая", "Июня","Июля","Августа","Сентября", "Октября","Ноября","Декабря");
name_day=new Array ("Воскресенье","Понедельник", "Вторник","Среда","Четверг", "Пятница","Суббота");
 
function wr_hours()
{
time=new Date();
 
time_sec=time.getSeconds();
time_min=time.getMinutes();
time_hours=time.getHours();
time_wr=((time_hours<10)?"0":"")+time_hours;
time_wr+=":";
time_wr+=((time_min<10)?"0":"")+time_min;
time_wr+=":";
time_wr+=((time_sec<10)?"0":"")+time_sec;
 
time_wr=""+name_day[time.getDay()]+", "+time.getDate()+" "+name_month[time.getMonth()]+", "+time.getFullYear()+" г. Время: "+time_wr;
 
obj_doc_time.innerHTML=time_wr;
} 
wr_hours();
setInterval("wr_hours();",1000);

var slides = document.querySelectorAll('#slider .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}