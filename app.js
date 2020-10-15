$(document).ready(function (){
  
  $name = $('input[name="item-name"'); 
  $amount = $('input[name="amount"');   
  
  $('#button').click(function () {
    
    var form_validated = true;
    
    if(form_validated) {
      $("table tr:first").after('<tr><td>'+$name.val()+'</td><td class="amount">Rs '+$amount.val()+'</td></tr>');
      $date.val(null);
      $amount.val(null);
      $name.val(null);
      $("#if-empty").remove();
    };
  });
  
});