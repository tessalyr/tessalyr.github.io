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



 $("button#show_a").click(function() {
  $(".chart").show();
  $("#table_whether").show();
  $("#table_released").hide();
  $("#table_boxoffice").hide();

  $("#text_box").html("Whether These Movies are Disney Princess Movies");
  $("#text_box").addClass("btn_text");
  $("#text_box").css("font-size","1.7em");
  $("#text_box").css("margin-top","35px");
  $(".chart").css("margin-bottom","3em");
  $(".table-responsive").css("margin-bottom","3em");

  var items = [];
  var i = 0;
  var airtable_read_endpoint = "https://api.airtable.com/v0/appfU4wJMpJkHidFR/Whether%20Princess?api_key=keywZFkvBIh6rNMwS";
  var dataSet = [];
  $.getJSON(airtable_read_endpoint, function(result) {
        $.each(result.records, function(key,value) {
            items = [];
                items.push(value.fields.whether_princess);
                items.push(value.fields.count);
                dataSet.push(items);
                console.log(items);
          }); // end .each
          console.log(dataSet);

      $('#table_a').DataTable( {
          data: dataSet,
          retrieve: true,
          columns: [
              { title: "Whether Princess Movies",
                defaultContent:""},
              { title: "Movies Number",
                  defaultContent:"" },
          ]
      } );

      var chart = c3.generate({
            data: {
                columns: dataSet,
                type : 'bar'
            },
            axis: {
              x: {label: 'Whether Princess Movies'},
              y: {label: 'Movies Number'}
            },
            bar: {
                title: "# of Items by Movies Category:",
            },
            color: {
              pattern: ['rgb(128, 159, 173)', 'rgb(202, 147, 169)']
            }
        });
   }); // end .getJSON
 }); // end button


$("button#show_b").click(function() {
  $(".chart").show();
  $("#table_whether").hide();
  $("#table_released").show();
  $("#table_boxoffice").hide();

  $("#text_box").html("Movies Grouped by Released Year");
  $("#text_box").addClass("btn_text");
  $("#text_box").css("font-size","1.7em");
  $("#text_box").css("margin-top","35px");
  $(".chart").css("margin-bottom","3em");
  $(".table-responsive").css("margin-bottom","3em");

  var items = [];
  var i = 0;
  var airtable_read_endpoint = "https://api.airtable.com/v0/appfU4wJMpJkHidFR/Released%20Year?api_key=keywZFkvBIh6rNMwS";
  var dataSet = [];
  $.getJSON(airtable_read_endpoint, function(result) {
        $.each(result.records, function(key,value) {
            items = [];
                items.push(value.fields.released);
                items.push(value.fields.count);
                dataSet.push(items);
                console.log(items);
          }); // end .each
          console.log(dataSet);

      $('#table_b').DataTable( {
          data: dataSet,
          retrieve: true,
          columns: [
              { title: "Released Year",
                defaultContent:""},
              { title: "Movies Number",
                  defaultContent:"" },
          ]
      } );

      var chart = c3.generate({
            data: {
                columns: dataSet,
                type : 'bar'
            },
            axis: {
              x: {label: 'Released Year'},
              y: {label: 'Movies Number'}
            },
            bar: {
                title: "# of Items by Released Year:",
            },
            color: {
              pattern: ['rgb(128, 159, 173)', 'rgb(202, 147, 169)']
            }
        });
  }); // end .getJSON
}); // end button


$("button#show_c").click(function() {
  $(".chart").show();
  $("#table_whether").hide();
  $("#table_released").hide();
  $("#table_boxoffice").show();

  $("#text_box").html("Movies Grouped by Box Office");
  $("#text_box").addClass("btn_text");
  $("#text_box").css("font-size","1.7em");
  $("#text_box").css("margin-top","35px");
  $(".chart").css("margin-bottom","20px");
  $(".table-responsive").css("margin-bottom","40px");

  var items = [];
  var i = 0;
  var airtable_read_endpoint = "https://api.airtable.com/v0/appfU4wJMpJkHidFR/BoxOffice%20Level?api_key=keywZFkvBIh6rNMwS";
  var dataSet = [];
  $.getJSON(airtable_read_endpoint, function(result) {
        $.each(result.records, function(key,value) {
            items = [];
                items.push(value.fields.box_office_level);
                items.push(value.fields.count);
                dataSet.push(items);
                console.log(items);
          }); // end .each
          console.log(dataSet);

      $('#table_c').DataTable( {
          data: dataSet,
          retrieve: true,
          columns: [
              { title: "Box Office",
                defaultContent:""},
              { title: "Movies Number",
                  defaultContent:"" },
          ]
      } );

      var chart = c3.generate({
            data: {
                columns: dataSet,
                type : 'bar'
            },
            axis: {
              x: {label: 'BoxOffice Level'},
              y: {label: 'Movies Number'}
            },
            bar: {
                title: "# of Items by Box Office Level:",
            },
            color: {
              pattern: ['rgb(128, 159, 173)', 'rgb(202, 147, 169, 0.9)','rgba(87, 100, 105, 0.5)','rgb(175, 113, 139)','rgba(87, 100, 105, 0.9)']
            }
        });
  }); // end .getJSON
}); // end button

$("button#hide_all").click(function() {
  $(".chart").hide();
  $("#table_whether").hide();
  $("#table_released").hide();
  $("#table_boxoffice").hide();
  $("#text_box").html("");
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

