<header id="banner" role="banner">
  <div class="container">
   <div class="brand-holder span12">
    <a class="brand" href="<?php echo home_url(); ?>/"><?php bloginfo('name'); ?></a>
   </div><!-- .brand-holder -->
   <nav id="nav-main" role="navigation">
      <?php
        if (has_nav_menu('primary_navigation')) {
          wp_nav_menu(array( 'theme_location' => 'primary-menu', 'container' => '', ));
        }
      ?>
    </nav>
  </div>
</header>
