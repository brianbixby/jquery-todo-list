$(document).ready(function() {
  // all this code inside here - it just waits for the DOM to be loaded
  // it's just like the COMContentLoaded!
  console.log("DOM is ready!");

  var toDoFormInput;
  var param1;

  $("#submit").click(function() {
    toDoFormInput = $("#toDoFormInput").val();
    addToDoItem();
    clearInput();
  });

  $("#wrapper").css("margin", "0 auto").css("width", "600px");
  $("#header").css("background", "white").css("font-color", "black").css("border-bottom", "black solid 10px").css("lineheight", "40px");
  $("#enterName").css("height", "40px").css("color", "black");
  $("#plus").css("text-align", "right").css("float", "right").css("height", "40px");
  $("#plus2").css("margin-left", "20px").css("height", "40px");

  $(".addToDo").click(function() {
    $("#hiding").toggle();
  });

  function addToDoItem() {
    console.log("New to do iteam added");
    $("#toDoListContainer").append("- " + toDoFormInput + "<br>");
  }

  //   function removeListItem() {
  //     for (var j = 0; j < toDoListContainer.children.length; j++) {
  //       toDoListContainer.children[j].addEventListener("click", listItemClicked);
  //     }
  //
  //     function listItemClicked() {
  //       if listItem[j] == this.id) {
  //       $(document).on("dblclick", "toDoListContainer", function() {
  //         $(toDoFormInput).fadeOut('slow');
  //       });
  //
  //     }
  //   }
  // }
});
