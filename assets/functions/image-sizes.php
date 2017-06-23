<?php

// Add image sizes
  // Covers
  add_image_size( 'small', 300, 600, array( 'center', 'center' ) );
  add_image_size( 'normal', 500, 800, array( 'center', 'center' ) );
  add_image_size( 'large', 600, 1000, array( 'center', 'center' ) );

// Examples
add_image_size( 'custom-size', 220, 180 ); // 220 pixels wide by 180 pixels tall, soft proportional crop mode
add_image_size( 'custom-size', 220, 180, true ); // 220 pixels wide by 180 pixels tall, hard crop mode
add_image_size( 'custom-size', 220, 220, array( 'left', 'top' ) ); // Hard crop left top
