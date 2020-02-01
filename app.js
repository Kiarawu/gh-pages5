
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function calendarMonths(){
        for(let i = 0; i < months.length; i++)
        {
            let doc = document.createElement("div");
            doc.innerHTML = months[i];
            doc.classList.add("dropdown-item");

            doc.onclick = (function () {
                let selectedMonth = i;
                return function ()
                {
                    month = selectedMonth;
                    document.getElementById("curMonth").innerHTML = months[month];
                    loadCalendarDays();
                    return month;
                }
            })();

            document.getElementById("months").appendChild(doc);
        }
    }


   function calendarDays(){
       for(let i=0; i > days.length;i++)
       let days = document.createElement('div');
       daysDocument.innerHTML = days[i];
       doc.classList.add("dropdown-item");

       doc.onclick = (function (){
           let selectedDay = i;
           return function()
       {
                    day = selectedDay;
                    document.getElementsByClassName("calendars-days").innerHTML = days[days];
                    loadCalendarDays();
                    return day()
       }
       }
   }

