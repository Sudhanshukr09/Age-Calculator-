function age() {
    var user_date = document.querySelector('#date').value;
    var user_month = document.querySelector('#month').value;
    var user_year = document.querySelector('#year').value;
  
    var date = new Date();
    var current_date = date.getDate();
    var current_month = 1 + date.getMonth();
    var current_year = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(user_date > current_date){
        current_date = current_date + month[current_month - 1];
        current_month = current_month - 1;
    }
    if(user_month > current_month){
        current_month = current_month + 12;
        current_year = current_year - 1;
    }
   
    var d = current_date - user_date;
    var m = current_month - user_month;
    var y = current_year - user_year;
  
    document.querySelector('#age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';

    if(user_date==''||user_month==''||user_year==''){
        alert('Enter Valid Date, Month & Year');
        document.querySelector('#age').innerHTML = '';
    }
  }

  window.onkeydown = function(e){
    if(e.key == "Enter")
    return age();
  }