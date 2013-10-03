$(function () {

    

    $(".btn-success").click(function() {

        //creates tabs and selects results by default
        $('#nav-tabs').css('display','block');

<<<<<<< HEAD
        $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        });
        
        //transition for search form
        $('#searchForm').slideUp('slow');

        //$('.head p').fadeOut('slow');
        $('.btn-reset').fadeIn('slow').css('display','block');

        //** empties table after each search
        $('.btn-reset').on('click', function(){
            $(this).fadeOut('slow').css('display', 'none');
            $('#searchForm').fadeIn('slow');
            $(".results").empty();
            $('#nav-tabs').css('display','none');
            $('input').val('');
        });
        //

        // grab inputs from form
        var city = encodeURIComponent($("#city").val());
        var keyword = encodeURIComponent($("#key").val());

        // Call to YQL 
        var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search" +
        "%20where%20location%3D%22" + city + "%22%20and%20type%3D%22jjj%22%20and%20query%3D%22" + keyword + "%22&format=" +
        "json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function(data) {

                if(data.query.count === 0 || typeof data.query.results.RDF.item === 'undefined') {
                    $(".results").append('<tr><td><div class="alert alert-warning">No results found. Try again.<div></td></tr>');
                } else {
                    for (var i = 0; i < data.query.results.RDF.item.length; i++) {

                        $(".results").append('<tr><td><button type="button" class="btn btn-default btn-xs btn-save">Save</button></td><td><button type="button" class="btn btn-default btn-xs btn-email">Email</button></td><td><a href="' +
                            data.query.results.RDF.item[i].source + '" target="_blank" class="result">' +
                            data.query.results.RDF.item[i].title[0] + '</a></td></tr>');
                    }
                }

                // Show table after it has been populated and functionality is bound
                // move container up
                //$('.container').css('padding-top', '20px');
                //$(".tabbable").fadeIn('slow');
                
                $('#myTab a:last').tab('show');
            }

        });
        
        
        $(".tab-content").on('click','.btn-save', function(){
            var savedListing = $(this).find('.result').data();
            console.log(savedListing);
            $("#saved").prepend('<tr><td>'+savedListing+'</td></tr>');

        });

         $(".tab-content").on('click','.btn-email', function(){
            var emailListing = $(this).find('.result').val();
            console.log(emailListing);
            $("#email").prepend('<tr><td>'+emailListing+'</td></tr>');

        });
=======
    // Call to YQL 
    var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search" +
    "%20where%20location%3D%22" + city + "%22%20and%20type%3D%22jjj%22%20and%20query%3D%22" + keyword + "%22&format=" +
    "json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {

            if(data.query.count == 0 || typeof data.query.results.RDF.item == 'undefined') {
                $(".results").append('<tr><td><div class="alert alert-warning">No results found. Try again.<div></td></tr>');
            } else {
                for (var i = 0; i < data.query.results.RDF.item.length; i++) {

                    $(".results").append('<tr><td><a href="' + 
                        data.query.results.RDF.item[i].source + '" target="_blank" class="result">' + 
                        data.query.results.RDF.item[i].title[0] + '</a></td></tr>');
                };
                // Show table after it has been populated and functionality is bound
                // move container up
                $('.container').css('padding-top', '20px');
                $(".tabbable").fadeIn('slow');
            }

        }
>>>>>>> 169bc88b6c00fa1b1c0a4ee0135326f05d799955

    });

});