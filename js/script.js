$(document).ready(function() {
  // all this code inside here - it just waits for the DOM to be loaded
  // it's just like the COMContentLoaded!
  console.log("DOM is ready!");

  var toDoFormInput;
  $("ul").on("click", "li", removeItem);

  $("#submit").click(function() {
    toDoFormInput = $("#toDoFormInput").val();
    addToDoItem();
  });

  $("#wrapper").css("margin", "0 auto").css("width", "600px");
  $("#header").css("background", "white").css("font-color", "black").css("border-bottom", "black solid 10px").css("lineheight", "40px");
  $("#enterName").css("height", "40px").css("color", "black");
  $("#plus").css("text-align", "right").css("float", "right").css("height", "40px");
  $("#plus2").css("margin-left", "20px").css("height", "40px");
  $("#minus").css("height", "40px");

  $(".addToDo").click(function() {
    $("#hiding").toggle();
  });

  function addToDoItem() {
    $('#listOutput').append("<li>" + toDoFormInput + "</li>");
  }

  function removeItem() {
    console.log('removing list item');
    this.remove();
  }
});
// $(li)
