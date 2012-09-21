<?php
  //phpinfo();
?>

<html>
<head>
<title>JavaScript/jQuery Tester</title>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="jquery-1.8.1.js"></script>
<script src="scrollEvents.js"></script>
<script src="showcaseSetup.js"></script>
</head>
<body>
  <div class="background">
    <div class="container">
      <div class="slide-holder">
        <div class="slide" id="slide0">
          <h1>Slide 0:</h1>
        </div><!-- #slide1 -->
      </div><!-- .slideholder(0) -->
      <div class="slide-holder">
        <div class="slide" id="slide1">
          <h1>Slide 1:</h1>
        </div><!-- #slide1 -->
      </div><!-- .slideholder(1) -->
      <div class="slide-holder">
        <div class="slide" id="slide2">
          <h1>Slide 2:</h1>
        </div><!-- #slide2 -->
       </div><!-- .slideholder(2) -->
      <div class="slide-holder">
        <div class="slide" id="slide3">
          <h1>Slide 3:</h1>
        </div> <!-- #slide3 -->
      </div><!-- .slideholder(3) -->
      <div class="slide-holder">
        <div class="slide" id="slide4">
          <h1>Slide 4:</h1>
        </div><!-- #slide4 -->
      </div><!-- .slideholder(4) -->
      <div class="slide-holder">
        <div class="slide" id="slide5">
          <h1>Slide 5:</h1>
        </div><!-- #slide5 -->
      </div><!-- .slideholder(5) -->
    </div><!--.container -->
    <navigation>
     <ul class="nav-list" >
      <li><a class="slide-nav" href="#slide0">Slide0</a></li>
      <li><a class="slide-nav" href="#slide1">Slide1</a></li>
      <li><a class="slide-nav" href="#slide2">Slide2</a></li>
      <li><a class="slide-nav" href="#slide3">Slide3</a></li>
      <li><a class="slide-nav" href="#slide4">Slide4</a></li>
      <li><a class="slide-nav" href="#slide5">Slide5</a></li>
   </navigation>
   <div id="log">
   </div>
  </div><!-- .background -->
</body>
</html>
