<header id="banner" class="navbar navbar-fixed-top" role="banner">
  <div class="navbar-inner">
    <div class="container">
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
     <div class="section-first span12">
     <div class="brand-holder">
      <a class="brand" href="<?php echo home_url(); ?>/">
     <?php bloginfo('name'); ?>
      </a>
      </div><!-- .brand-holder -->
    </div><!-- .section-first -->
    <div class="section-second span12">
      <div class="nav-holder">
        <nav id="nav-main" class="nav-collapse" role="navigation">
            <?php
              if (has_nav_menu('primary_navigation')) {
                wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav'));
              }
            ?>
        </nav>
      </div><!-- .nav-holder -->
    </div><!-- .section-second -->
  </div><!-- .container -->
</div><!-- .navbar-inner -->
</header>
