$(() => {
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        console.log(this)
        console.log("THIS IS FOR TESTING: " , id)
        // var nowDevour = $(this).data("nowDevour");

        var nowDevourState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevourState
        }).then(() => {
            // console.log(nowDevour);
            console.log("This burger is now devoured.");
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("this is a thing")
        var newBurger = {
            burger_name: $("#newFood").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type:"POST",
            data: newBurger
        }).then(() => {
            console.log("New burger is up.")
            location.reload();
        });
    });
});