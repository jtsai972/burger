$("#add-burger button").on("click", function(event) { 
  event.preventDefault(); 
  console.log("Add Burger Button clicked");

  $("#add-valid").addClass("active");

  let burgerData = $("#new-burger").val().trim();
  if( burgerData !== "" ) {

    // AJAX post the data to the friends API.
    $.post("/api/burgers", burgerData, function(data) {
      console.log("Post data");
      console.log(data);
    });

    $("#add-valid").text("Burger added!");
    

  } else {
    $("#add-valid").text("Please enter a burger name.")
  }
});

$(".burger button.change-devoured").on("click", function() {
  console.log("Eating the burger " + $(this).data("id"));
});

$(".burger button.delete").on("click", function() {
  console.log("Deleting the burger " + $(this).data("id"));
});

$(".burger .rate").on("click", function() {
  console.log("Rating the burger " + $(this).data("id"));
});

$(".burger form button").on("click", function() {
  console.log("Reviewing the burger " + $(this).data("id"));
});