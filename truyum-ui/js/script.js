function invalidDateOfLaunch() {
    var launchDate = document.getElementById("dateOfLaunch").value;

    console.log(launchDate);
    var currentDate = new Date().toISOString.slice(0, 10);
    if(launchDate < currentDate) {
        alert("Please enter a valid date!");
    }
}