    $("#Search").on("click", function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    // url += '?' + $.param({
    // 'api-key': "7839683277ad4bcfbec7be6f9e388f1f"
    // });

    var SearchTerm = $("#SearchTerm").val()
    var NoRecord = $("#NoRecord").val()
    var EndYear = $("#EndYear").val()
    var StartYear = $("#StartYear").val()
    var data = [];

    var SearchTerm = "Trump"
    var NoRecord = 5
    var EndYear = ""
    var StartYear = ""


    url += '?' + $.param({
         'api-key': "7839683277ad4bcfbec7be6f9e388f1f",
         'q': SearchTerm,
         //'begin_date': EndYear,
         //'end_date': StartYear
        });
    console.log(url)
    

    
    //ID5 - button - Search ID6  - button - ClearResults //

    $.ajax({
        url: url,
        method: 'GET',
    })

        .done(function(result) {
        console.log(result);
        
        data = result.response.docs;

        var divResults;

        for(var i=0; i < NoRecord; i++){

            divResults=$("<div>")
            divResults.addClass('results');
            divResults.html(data[i].headline.main)
            

            divResults.append("<br>" + data[i].byline.original)
            divResults.append("<br>" + data[i].pub_date)
            divResults.append("<br>" + data[i].web_url)
            $("#TopArticles").append("<br>");

            $("#TopArticles").append(divResults);

            //data[i]);
        //     console.log( JSON.stringify(data[i].headline.main)+
        // JSON.stringify(data[i].byline.original)+
        // JSON.stringify(data[i].pub_date)+
        // JSON.stringify(data[i].web_url))

        }
        
        

        console.log(data);
        //console.log(JSON.stringify(data));

        })
      
      .fail(function(err) {
        throw err;
      });



      
});
