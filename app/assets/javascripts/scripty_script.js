
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
  function displayResultsRound(results, roundNumber) {
    var endPoint = 10;

    if(results.length < 10){
      endPoint = results.length;
    }

    for(var i = 0; i < endPoint; i++){
      var divGrid = $("<div class='grid-item'></div>")
      var img = $("<img></img>");
      var src = results[i]["images"]["original"]["url"];
      $(img).attr("src", src).addClass("result".concat(i));
      $('.pagination').show();
      $('#results' + roundNumber).append(divGrid.append(img));
    }
    $('.pagination').find('[data-id="1"]').addClass("active");
    $('#results1').show();
  }

  // gif
  $('#gif-search').on('change', function(e){
    $('.results-section').empty();
    $('.pagination').empty();
    e.preventDefault();
    var keyword = $('#gif-search').val().replace(/\s/g, '+');
    var url = 'https://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=dc6zaTOxFJmzC&limit=100';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(responseData) {
      var results = responseData["data"];
      var numberOfRounds = Math.round(results.length / 10);

      for(var i = 1; i <= numberOfRounds; i++) {
        var endPoint = i*10;
        var startPoint = i*10 - 10;
        var range = results.slice(startPoint, endPoint);
        displayResultsRound(range, i);
        var li = $("<li class='waves-effect goto' data-id=" + i +"> <a href='#!'>" + i + "</a></li>");

        $('.pagination').append(li);
        // $(li).attr({"id", "goto-" + i)};
      }
    })
  });

  $('.pagination').on('click', '.goto', function(){
    var pageNumber = $(this).attr('data-id');
    $('.results-section').hide();

    $('#results' + pageNumber).fadeIn('slow');
    $('.waves-effect').removeClass('active')
    $(this).addClass('active');
  })

  // select gif
  $('.all-gifs').on('click', 'img', function(){
    $('.all-gifs img').css("border", "none").removeClass("selected-gif");
    $(this).css("border", "3px solid beige").addClass("selected-gif")
  });
  
  $('#gif-form').on('submit', function(){

    var selectedGifUrl = $('.all-gifs .selected-gif').attr('src');
    var author = $('.main-gif-section #component_author').val();
    var to_prompt = $('.main-gif-section #to-prompt-gif').is(':checked');

    $.ajax({
      url: '/gifs',
      type: 'post',
      data: {selectedGifUrl: selectedGifUrl, author: author, to_prompt: to_prompt},
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
  // user selects the gif they want & it's highlighted
  // user clicks Submit - send that img, author, to_post to the backend
  // save it as a Gif
  // render it in the feed

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 200
  });


});