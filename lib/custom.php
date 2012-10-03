<?php

// Custom functions
function add_nav_class($output) {
  $output= preg_replace('/<a/', '<a class="slide-nav"', $output, -1);
  return $output;
}
add_filter('wp_nav_menu', 'add_nav_class');
