
// var access_token = "16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587",
//     access_parameters = {
//         access_token: access_token
//     };

// // var form = $('#tagsearch');
// // form.on('submit', function(ev) {
// //     var q = this.tag.value;
// //     if(q.length) {
// //         //console.log(q);
// //         grabImages(q, 40, access_parameters);
// //     }
// //     ev.preventDefault();
// // });

// function grabImages(tag, count, access_parameters) {
//     var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
//     $.getJSON(instagramUrl, access_parameters, onDataLoaded);
// }

// function onDataLoaded(instagram_data) {
//     var target = $("#target");
//     //console.log(instagram_data);
//     if (instagram_data.meta.code == 200) {
//         var photos = instagram_data.data;
//         //console.log(photos);
//         if (photos.length > 0) {
//             target.empty();
//             for (var key in photos) {
//                 var photo = photos[key];
//                 target.append('<a href="' + photo.link + '"><img src="' + photo.images.thumbnail.url + '"></a>')
//             }
//         } else {
//             target.html("nothing found");
//         }
//     } else {
//         var error = instagram_data.meta.error_message;
//         target.html(error);
//     }
// }

// grabImages('puppy', 200, access_parameters);

// $client_id = '7d5198d066e04754bcf3b8291adf153e';
// $count = 33; // the number за photos per request (from 1 to 33)
// $tag = 'puppy';
 
// $result = rudr_instagram_api_curl_connect('https://api.instagram.com/v1/tags/' . $tag . '/media/recent?client_id=' . $client_id . '&count=' . $count);
 
// foreach ($result->data as $post) {
// 	echo '<a href="' . $post->link . '"><img src="' . $post->images->thumbnail->url . '" /></a>';
// }
 
// $result_2 = rudr_instagram_api_curl_connect( $result->pagination->next_url ); // API request for the next 33 photos
// // it is the same: $result = rudr_instagram_api_curl_connect( 'https://api.instagram.com/v1/tags/' . $tag . '/media/recent?client_id=' . $client_id . '&count=' . $count . '&max_tag_id=' . $result->pagination->next_max_tag_id );
 
// foreach ($result_2->data as $post_2) {
// 	echo '<a href="' . $post_2->link . '"><img src="' . $post_2->images->thumbnail->url . '" /></a>';
// }


$(document).ready(function(){
  // function displayResultsRound(results, roundNumber) {
  //   var startPoint = roundNumber*10 - 10;
  //   var endPoint = roundNumber*10;
  //   for(var i = startPoint; i < endPoint; i++){
  //     var img = $("<img></img>");
  //     var src = results[i]["images"]["original"]["url"];
  //     $(img).attr("src", src).addClass("result".concat(i));
  //     $('.pagination').show();
  //     $('.results-section').hide();
  //     $('#results' + roundNumber).show();
  //     $('#results' + roundNumber).append(img);
  //   }
  // }

  // gif
  $('#gif-button').on('click', function(e){
    e.preventDefault();
    var keyword = $('#gif-search').val();
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=dc6zaTOxFJmzC';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(responseData) {
      var results = responseData["data"];

      for(var i = 0; i < 10; i++){
        var img = $("<img></img>");
        var src = results[i]["images"]["original"]["url"];
        $(img).attr("src", src).addClass("result".concat(i));
        // $('.results-section').hide();
        $('#results1').show();
        $('#results1').append(img);
      }

      for(var j = 10; j < 20; j++){
        var img = $("<img></img>");
        var src = results[j]["images"]["original"]["url"];
        $(img).attr("src", src).addClass("result".concat(j));
        // $('.results-section').hide();
        // $('#results' + roundNumber).show();
        $('#results2').append(img);
      }

      for(var k = 20; k < 30; k++){
        var img = $("<img></img>");
        var src = results[k]["images"]["original"]["url"];
        $(img).attr("src", src).addClass("result".concat(k));
        // $('.results-section').hide();
        // $('#results' + roundNumber).show();
        $('#results3').append(img);
      }

      // displayResultsRound(results, 1);
      // displayResultsRound(results, 2);
      // displayResultsRound(results, 3);
      // displayResultsRound(results, 4);
      // displayResultsRound(results, 5);
      // displayResultsRound(results, 6);
    })
  });

  $('.all-gifs').on('click', 'img', function(){
    console.log('clicked');
    console.log(this);
  })

  $('#goto-2').on('click', function(){
    $('.results-section').hide();

    $('#results2').fadeIn('slow');
    $('.waves-effect').removeClass('active')
    $('#goto-2').addClass('active');
  })

  // select gif
  $('.all-gifs').on('click', 'img', function(){
    var selectedGifUrl = $(this).attr('src');
    $.ajax({
      url: '/gifs',
      type: 'post',
      data: {selectedGifUrl: selectedGifUrl},
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
  })
  

  // user selects the gif they want
  // send that img to the backend
  // save it as a Gif
  // render it in the feed

});