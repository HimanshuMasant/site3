$("button").click(function(){
  var a = $("#nameid").val();
  $("#imageid").attr("src", `https://joeschmoe.io/api/v1/${a}`)
});
