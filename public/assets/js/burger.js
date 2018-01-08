// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log('added new burger');
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    if (devoured == 0) {
      var devoured = 1;
    } else {
      var devoured = 0;
    }

    var newDevouredState = {
      devoured: devoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});