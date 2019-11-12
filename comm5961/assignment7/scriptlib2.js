$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
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

     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appfU4wJMpJkHidFR/Doll%20Category?api_key=keywZFkvBIh6rNMwS";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.category);
                     items.push(value.fields.rollup);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Category of Princess Doll",
                     defaultContent:""},
                   { title: "Total",
                       defaultContent:"" },
               ]
           } );

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: 'Category'},
                  y: {label: 'Total'}
                },
                bar: {
                    title: "# of Items by Doll Category:",
                }
            });

      }); // end .getJSON

   }); // end button

}); // document ready
