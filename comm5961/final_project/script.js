$(document).ready(function(){
  $("button#show_princess").click(function() {
    $("#princess_table").toggle();
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appfU4wJMpJkHidFR/Homepage?api_key=keywZFkvBIh6rNMwS";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.name);
                   items.push(value.fields.chinese_name);
                   items.push(value.fields.princess_status);
                   items.push(value.fields.species);
                   items.push(value.fields.royal_status);
                   items.push(value.fields.nationality);
                   items.push(value.fields.spouse);
                   items.push(value.fields.animation);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         $('#table0').DataTable( {
             data: dataSet,
             retrieve: true,
             columns: [
                 { title: "Name",
                   defaultContent:""},
                 { title: "Chinese Name",
                     defaultContent:"" },
                 { title: "Princess Status",
                   defaultContent:""},
                 { title: "Species",
                     defaultContent:""},
                 { title: "Royal Status",
                   defaultContent:""},
                 { title: "Nationality",
                   defaultContent:""},
                 { title: "Spouse",
                   defaultContent:""},
                 { title: "Animation",
                   defaultContent:""},
             ],
         } );
    }); // end .getJSON
 }); // end button

  $("button#show_animated").click(function(){
      $("#airtable_animated").toggle();
  });
  $("button#show_remake").click(function(){
      $("#actresses").toggle();
  });
  $("button#show_airtable").click(function(){
      $("#airtable_actress").toggle();
  });

  $("button#show_dolls_table").click(function() {
      $("#dolls_table").show();
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

  $("button#hide_dolls_table").click(function() {
    $("#dolls_table").hide();
  });

  $("button#show_dolls_chart").click(function() {
    $("#dolls_table2").show();
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
              },

          });
    }); // end .getJSON
  }); // end button

  $("button#hide_dolls_chart").click(function() {
    $("#dolls_table2").hide();
    $("#chart").hide();
  }); // hide dolls chart



}); // document ready

