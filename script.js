 let deadline = '2018-10-21';

    let addingZero = (seconds ,minutes, hours) => {

        let sec = String(seconds),
            min = String(minutes),
            hou = String(hours);
    
        if (sec.length < 2) {
            seconds = ` 0 ${seconds}`;
        }
        if (min.length < 2) {
            minutes = `0 ${minutes}`;
        }
    
        if (hou.length < 2) {
            hours = `0 ${hours}`;
        } 
        return {
            'seconds' : seconds,
            'hours' : hours,
            'minutes' : minutes
        };
    };

    

    let getTimeRemaining = (endtime) => {

        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds, minutes, hours;
        if (t > 0) {
            seconds = Math.floor( (t/1000) % 60);
            minutes = Math.floor( (t/1000/60) % 60 );
            hours = Math.floor( t/(1000*60*60) );
        } else {
            seconds = 0;
            minutes = 0;
            hours = 0;
        }
        
        let m = addingZero(seconds , minutes, hours);
        seconds = m.seconds;
        hours = m.hours;
        minutes = m.minutes;

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

 
    let setClock = (id, endtime) => {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
           
        let updateClock = () => {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        };

        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadline);
