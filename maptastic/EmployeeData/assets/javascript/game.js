//Global Variables
//ID divs ID='EmployeeName' / ID='Role' / ID='Data' / ID='Rate

// Initialize Firebase
//var config = {
   // apiKey: "AIzaSyB6n1pm3PGn50UXsxzq89U6vwWKGsybclM",
   // authDomain: "itchymonkey-ba898.firebaseapp.com",
    //databaseURL: "https://itchymonkey-ba898.firebaseio.com",
    //projectId: "itchymonkey-ba898",
    //storageBucket: "itchymonkey-ba898.appspot.com",
    //messagingSenderId: "239508967553"



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBiMGdKuWtETucz2SyqD5EwraEXYlRKceU",
    authDomain: "maptastic-71320.firebaseapp.com",
    databaseURL: "https://maptastic-71320.firebaseio.com",
    projectId: "maptastic-71320",
    storageBucket: "maptastic-71320.appspot.com",
    messagingSenderId: "1006928955068"
  };
 




firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values

var objdata = {

    Name: "",
    Role: "",
    Street: "",
    City:"",
    Zip:"",
    Country:"",     
    Longitude:0,
    Latitude: 0,
    SigningDate: 0,
    SigningDate: 0,
    TotalBilled: 0,

}
  // Capture Button Click
$("#submit").on("click", function(event) {
    console.log("You clicked the button")
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    //   <!--ID divs ID='EmployeeName' / ID='Role' / ID='Date' / ID='Rate-->
    //console.log($("#EmployeeName").val())
    objdata.Name = $("#EmployeeName").val().trim();
    objdata.Role = $("#Role").val().trim();
    
    objdata.Street= $("#Street").val().trim();
    objdata.City = $("#City").val().trim();
    objdata.Zip= $("#Zip").val().trim();
    objdata.Country = $("#Country").val().trim();
    objdata.Longitude = $("#Longitude").val().trim();
    objdata.Latitude = $("#Latitude").val().trim();
    objdata.MonthlyRate = $("#Rate").val().trim();
    objdata.SigningtDate= $("#Date").val().trim();

    database.ref().push({
      Name: objdata.Name,
      Role: objdata.Role,
      Street: objdata.Street,
      City: objdata.City,
      Zip: objdata.Zip,
      Longitude: objdata.Longitude,
      Latitude: objdata.Latitude,
      Country: objdata.Country,
      SigningDate: objdata.Sig,
      MonthlyRate: objdata.MonthlyRate
    });

   
});

var a = 0;
database.ref().on("child_added", function(childsnapshot){       
    a++;
    console.log(a)
    console.log(childsnapshot.val().Name);
    console.log(childsnapshot.val().Role);
    console.log(childsnapshot.val().Street);
    console.log(childsnapshot.val().City);
    console.log(childsnapshot.val().Zip);
    console.log(childsnapshot.val().Country);
    console.log(childsnapshot.val().Latitude);
    console.log(childsnapshot.val().longitude);
    console.log(childsnapshot.val().SigningDate);
    console.log(childsnapshot.val().MonthlyRate)

    $("#table > tbody").append("<tr> <td>" + childsnapshot.val().Name + "</td>" 
                        + "<td>" + childsnapshot.val().Role + "</td>" 
                        + "<td>" + childsnapshot.val().Street + "</td>"
                        + "<td>" + childsnapshot.val().City + "</td>"
                        + "<td>" + childsnapshot.val().Zip + "</td>"
                        + "<td>" + childsnapshot.val().Country + "</td>"
                        + "<td>" + childsnapshot.val().Longitude +"</td>"
                        + "<td>" + childsnapshot.val().Latitude + "</td></tr>")
                     
                        
});                   
                     

