function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = this.ticketPrice();
}

// Ticket.prototype.ticketPrice() = {
//   this.price =
// }

function Movie(title, timesArray, newRelease, forKids){
  this.title = title;
  this.times = timesArray;
  this.newRelease = newRelease
  this.forKids = forKids;
}

$(document).ready(function(){

  $("#ageSelect").change(function(){
    var age = $("#ageSelect").val();
    // alert("You selected " + age)
    if (age === "child") {
      $(".kidFriendly").show();
    } else {
      $(".kidFriendly").show();
      $(".allMovies").show();
    }
  });
})
