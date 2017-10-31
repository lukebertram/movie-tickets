function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price;
  this.setTicketPrice();
}

Ticket.prototype.setTicketPrice = function(){
  var basePrice = 10;
  if (this.age === "child"){
    this.price = 5;
  } else if (this.age === "senior"){
    this.price = basePrice - 3;
  } else if (this.time === "12:00pm"){
    this.price = 5;
  } else {
    this.price = basePrice
  }
}

function Movie(title, timesArray){
  this.title = title;
  this.times = timesArray;
}

var movies = [];
movies.push(new Movie("CryptoSquare", ["2:15pm", "7:32pm", "12:01am"]));
movies.push(new Movie("Electromath", ["12:00pm", "2:15pm", "7:32pm", "12:01am"]));
movies.push(new Movie("Chimps", ["12:00pm", "2:15pm", "7:32pm", "12:01am"]));
movies.push(new Movie("Sawdust", ["2:15pm", "7:32pm", "12:01am"]));

$(document).ready(function(){
  $("#ageSelect").change(function(){
    var age = $("#ageSelect").val();
    // alert("You selected " + age)
    if (age === "child") {
      $(".kidFriendly").show();
      $(".allMovies").hide();
    } else {
      $(".kidFriendly").show();
      $(".allMovies").show();
    }
  });

  $("#movieSelect").change(function(){
    var movieTitle = $("#movieSelect").val();
    // look through movies for this title
    for (var i = 0; i < movies.length; i++) {
      // if you find the movie with matching title
      if (movies[i].title.toLowerCase() === movieTitle){
        var movietimes = movies[i].times;
        // set form times to those contained in the movie obj
        $("#timeSelect").empty();
        movietimes.forEach(function(time){
          $("#timeSelect").append(
            '<option value="'+ time +'" class="">'+ time +'</option>'
          );
        });
      }
    }
  });
  $("form#movieTickets").submit(function(event) {
    event.preventDefault();
    var ageChoice = $("select#ageSelect").val();
    var movieChoice = $("select#movieSelect").val();
    var timeChoice = $("select#timeSelect").val();

    var newTicket = new Ticket(movieChoice, timeChoice , ageChoice);

    $("ul#results").append(
      "<li> Movie: "+ newTicket.movie +"</li>" +
      "<li> Time: "+ newTicket.time +"</li>" +
      "<li> Price: $"+ newTicket.price +".00</li>"
    );
  })
})
