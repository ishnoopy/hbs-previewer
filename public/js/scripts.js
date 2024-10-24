$(document).ready(function () {
  console.log("Hello from scripts.js");

  $("#preview-btn").click(function() {
    console.log("Preview button clicked");

    const template = $("#template").val();
    const data = $("#data").val();

    console.log("Template: ", template);
    console.log("Data: ", data);

    $.ajax({
      url: "/preview",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        template,
        data
      }),
      success: function(response) {
        console.log(response);

        $("#preview").html(response.result);
      }
    })
  })

  $("#reset-btn").click(function () {
    console.log("Reset button clicked");
    $("#preview").html("");
  })
});