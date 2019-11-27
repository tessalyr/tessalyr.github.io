$(document).ready(function(){
  $("button#show_animated").click(function(){
      $("#airtable_animated").show();
  });
});
$(document).ready(function(){
  $("button#hide_animated").click(function(){
      $("#airtable_animated").hide();
  });
});

$(document).ready(function(){
  $("button#show_remake").click(function(){
      $("#actresses").show();
  });
});
$(document).ready(function(){
  $("button#hide_remake").click(function(){
      $("#actresses").hide();
  });
});

$(document).ready(function(){
  $("button#show_airtable").click(function(){
      $("#airtable_actress").show();
  });
});
$(document).ready(function(){
  $("button#hide_airtable").click(function(){
      $("#airtable_actress").hide();
  });
});


$(document).ready(function(){

  $("button#get_data").click(function() {
      $(".table-responsive").show();
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appfU4wJMpJkHidFR/Princess%20Doll?api_key=keywZFkvBIh6rNMwS";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.name);
                     items.push(value.fields.original);
                     items.push(value.fields.category);
                     items.push(value.fields.size1);
                     items.push(value.fields.size2);
                     items.push(value.fields.price);
                     items.push(value.fields.discount);
                     items.push(value.fields.score);
                     items.push(value.fields.url);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table1').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Name",
                     defaultContent:""},
                   { title: "Original",
                       defaultContent:"" },
                   { title: "Category",
                     defaultContent:"" },
                   { title: "Size1",
                     defaultContent:""},
                   { title: "Size2",
                       defaultContent:""},
                   { title: "Price",
                     defaultContent:""},
                   { title: "Discount",
                     defaultContent:""},
                   { title: "Score",
                     defaultContent:""},
                   { title: "Link",
                     defaultContent:""},
               ]
           } );
      }); // end .getJSON
   }); // end button

}); // document ready
