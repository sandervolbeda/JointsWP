<div class="row collapse">
	<div class="shrink columns">
		<div class="logo-mobile">
			<a href="<?php echo site_url(); ?>">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/images/jmg-logo.svg" alt="Jobs &#38; Media Group">
			</a>
		</div>
	</div>
	<div class="expand columns">
		<div class="hamburger-menu">
			<a href="#" id="menu-icon">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</a>
			<div class="mobile-cover-menu">
				<?php // Remember to change WordPress menu name to mobile-header-menu in the admin ?>
				<?php wp_nav_menu( array(
					'menu_id'				=> 'mobile-header-menu',
					'theme_location' 	    => 'header-menu'
				) );
				?>
			</div>
		</div>
	</div>
</div>
