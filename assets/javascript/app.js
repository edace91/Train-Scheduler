// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD_OKYV8ikB4jYiO9F3aonS99ONnAPEBD8",
    authDomain: "train-scheduler-8db66.firebaseapp.com",
    databaseURL: "https://train-scheduler-8db66.firebaseio.com",
    storageBucket: "train-scheduler-8db66.appspot.com",
  };

  firebase.initializeApp(config);

  // variable to reference the database
  var database = firebase.database();

  // Initial Values
  var name = "";
  var destination = "";
  var time = "";
  var frequency = "";
  

  // Capture Button Click
 $("#addTrain").on("click", function() {
	// logic for storing and retrieving the train input
	//provide initial data to Firebase database.

  //grabs information from input panel and assigns to variable
	name = $('#nameInput').val().trim();
	destination = $('#destinationInput').val().trim();
	time = $('#timeInput').val().trim();
	frequency = $('#frequencyInput').val().trim();

  //log the input
  console.log(name);
  console.log(destination);
  console.log(time);
  console.log(frequency);
	
  //push to the database 
	database.ref().push({
		name: name,
		destination: destination,
		time:time,
		frequency: frequency

	});

  alert("Train successfully added!");

  //once pushed clear input fields
    $('#nameInput').val("");
    $('#destinationInput').val("");
    $('#timeInput').val("");
    $('#frequencyInput').val("");

  // Prevents moving to new page
  return false;

 });

database.ref().on("child_added", function(childSnapshot, prevChildKey){

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

  // Console Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);

 
  var trainTime = moment(trainTime, "HH:mm");
  console.log("first train time:" + trainTime);

  var timeNow = moment();

  var timeDifference = timeNow.diff(moment(trainTime), "minutes");

  var tRemainder = timeDifference % trainFrequency;

  var tMinutesTillTrain = trainFrequency - tRemainder;

  var nextTrain = moment().add(tMinutesTillTrain, "minutes");

  nextTrain = moment(nextTrain).format("HH:mm");



  // Add all Train data into the trainTable-----trainame--------------------Destination----------------------Frequency--------------------NextArival----------------Minutes Away___________end/         
  $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + nextTrain + "</td><td>" + tMinutesTillTrain + "</td></tr>");

});

function onFailure(errorObject){
console.log("Errors Handled:" + errorObject.code)

};


