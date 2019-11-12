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
        var airtable_read_endpoint = "https://api.airtable.com/v0/appfU4wJMpJkHidFR/Homepage?api_key=keywZFkvBIh6rNMwS";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.princess_name);
                       items.push(value.fields.chinese_name);
                       items.push(value.fields.alias);
                       items.push(value.fields.princess_status);
                       items.push(value.fields.age);
                       items.push(value.fields.species);
                       items.push(value.fields.occupation);
                       items.push(value.fields.nationality);
                       items.push(value.fields.spouse);
                       items.push(value.fields.royal_status);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Princess Name",
                       defaultContent:""},
                     { title: "Chinese Name",
                       defaultContent:""},
                     { title: "Alias",
                         defaultContent:"" },
                     { title: "Princess Status",
                       defaultContent:"" },
                     { title: "Age",
                       defaultContent:""},
                     { title: "Species",
                         defaultContent:""},
                     { title: "Occupation",
                       defaultContent:""},
                     { title: "Nationality",
                       defaultContent:""},
                     { title: "Spouse",
                       defaultContent:""},
                     { title: "Royal Status",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
