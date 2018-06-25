
// manage three tabs at the top of the page
function openPanel(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-red";
  }

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSXnEmWy26xVuFw4bUbJ8BPVXDlUl_Qmg",
    authDomain: "trainscheduler-fcd33.firebaseapp.com",
    databaseURL: "https://trainscheduler-fcd33.firebaseio.com",
    projectId: "trainscheduler-fcd33",
    storageBucket: "trainscheduler-fcd33.appspot.com",
    messagingSenderId: "726291828897"
  };
  firebase.initializeApp(config);
    
    // Create a variable to reference the database
    // const database = firebase.database().ref().child("schedule");
    const database = firebase.database();
    
    // Initial Values
    var trainD = {
    
        trainN: "",
        dest: "",
        trainT: "",
        freq: 0,
        nextArrival: 0,
        minutesAway: 0,
    
    }
    // Initialize minute interval counter
    var minuteTimer = setInterval(minuteCountdown, 60000);
    // var minuteTimer = setTimeout(minuteCountdown, 5000); // Used for testing
    $("#currentDate").text(moment().format("MMMM Do YYYY, H:mm"));
    
    function minuteCountdown() {
        console.log("Timer")
        // for each train added to the dom, decrement the minutes to train arrival
        $(".mins").each(function(){
            let curMinArrElement = $(this);  // create copy of 'this', it gets reassigned when reading from database
            let min = parseInt($(this).text());
            console.log("mins: "+min)
            min--;
            if (min == 0){
                let currKey = curMinArrElement.attr("data-key")
                let trainRef=database.ref(currKey);
                trainRef.once("value", function(data){
                    
                    let time = moment(data.val().trainT,"HH:mm");
                    let freq = data.val().freq;
                
                    let minToA = updateTrainTime(time,freq);
    
                    curMinArrElement.text(minToA); // Update minutes to arrival
                      })
            }
            else {
                curMinArrElement.text(min);
            }
            $("#currentDate").text(moment().format("MMMM Do YYYY, H:mm")); // Update current date/time display
        })
    }
    
    // Capture Button Click
    $("#submit").on("click", function(event) {
        event.preventDefault();
        console.log($("trainName").val())
        trainD.trainN = $("#trainName").val().trim();
        trainD.dest = $("#destination").val().trim();
        trainD.trainT= $("#trainTime").val().trim();
        trainD.freq = $("#frequency").val().trim();
     
        // database.ref("trainSchedule/").push({
        database.ref().push({
            trainN: trainD.trainN,
            dest: trainD.dest,
            trainT: trainD.trainT,
            freq: trainD.freq
        })
    });
    
    // When item added to database
    database.ref().on("child_added", function(snapshot){       
    
        console.log(JSON.stringify(snapshot))
    
        // Get the first train time, convert to UTC
        let time = moment(snapshot.val().trainT,"HH:mm")
        let freq = snapshot.val().freq
    
        let minToA = updateTrainTime(time,freq);
    
    
        // Display train entry
        $("#schedule > tbody").append("<tr>" 
       
        + "<td>" + snapshot.val().trainN + "</td>" 
        + "<td>" + snapshot.val().dest + "</td>" 
        + "<td>" + parseInt(snapshot.val().freq) + "</td>" 
        + "<td class='arrTime' data-key="+snapshot.key+">" + moment().add(minToA,"minutes").format("HH:mm") + "</td>"
        + "<td class='mins' data-key="+snapshot.key+">" + minToA +  "</td></tr>")
       
        
    
    });
    
    $(document).on("click",".edit", function(event) {
        console.log("edit");
        // Ideally, I would have code here that would edit the entry
    });
    
    $(document).on("click",".trash", function(event) {
        console.log("trash");
        // Ditto, code to delete the train entry... oh, well...
    });
    
    // Display next train time
    // startTime:UTC, frequency: integer
    function updateTrainTime (startTime,freq) {
    
        // Calculate the time difference between now and the first train time
        var trainDiff = moment().diff(startTime,"minutes");
    
        // If trainDiff is negative: remainder = minutes to next train
        // If trainDiff is positive: remainder = minutes since last train
        var remainder = trainDiff % freq;
    
        var minToArrival;
        if (trainDiff < 0) {
            minToArrival = Math.abs(remainder)+1;
        }
        else {
            minToArrival = frequency - remainder;
        }
        return(minToArrival);
        
    }