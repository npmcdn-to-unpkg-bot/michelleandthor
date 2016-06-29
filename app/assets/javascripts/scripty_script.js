// console.log('init!');

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