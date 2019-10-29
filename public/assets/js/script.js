

/* ------------------------------------------------------------
 * ADD BURGER FORM BUTTON CLICK
 * ------------------------------------------------------------ */

//creating burger
$("#add-burger button").on("click", function(event) { 
  event.preventDefault(); 
  let burgerData = $("#new-burger").val().trim();

  console.log("Add Burger Button clicked");

  $("#add-valid").addClass("active");

  if( burgerData !== "" ) {

    // AJAX post the data to the friends API.
    $.post("/api/burgers", burgerData, function(data) {
      console.log("Post data");
      location.reload();
    });

    $("#add-valid").text("Burger added!");

  } else {
    $("#add-valid").text("Please enter a burger name.")
  }
});

/* ------------------------------------------------------------
 * BURGER BUTTONS
 * ------------------------------------------------------------ */

$(".burger button.change-devoured").on("click", function() {
  console.log("Eating the burger " + $(this).data("id"));
  // Send the PUT request.

  $.ajax("/api//" + id, {
    type: "PUT",
    data: newSleepState
  }).then(
    function() {
      console.log("changed sleep to", newSleep);
      // Reload the page to get the updated list
      location.reload();
    }
  );
  $.put("/api/friends/:id", function(data) {
    console.log("changed sleep to", newSleep);
    // Reload the page to get the updated list
    location.reload();
    //update burger status
  });
  

});

$(".burger button.delete").on("click", function() {
  console.log("Deleting the burger " + $(this).data("id"));
  //delete burger
});

$(".burger .rate").on("click", function() {
  console.log("Rating the burger " + $(this).data("id"));
});

$(".burger form button").on("click", function() {
  console.log("Reviewing the burger " + $(this).data("id"));
});

