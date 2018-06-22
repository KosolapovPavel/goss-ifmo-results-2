<?php
/*
	Plugin Name: Pavel Kosolapov today's date
*/
add_action('wp_footer', function($content) {
  echo $content . ' Pavel time: '. date(DATE_ATOM, mktime(0, 0, 0, 7, 1, 2000));;
});
?>
