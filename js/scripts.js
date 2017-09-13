$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#person").val();
    var animalInput = $("input#animal").val();
    var verbInput = $("input#verb").val();
    var cityInput = $("input#city").val();
    var nounInput = $("input#noun").val();

    $(".person").text(personInput);
    $(".animal").text(animalInput);
    $(".verb").text(verbInput);
    $(".city").text(cityInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
