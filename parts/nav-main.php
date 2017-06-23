<div class="row no-table align-middle">
    <div class="small-4 columns">
        <div class="logo-desktop">
            <a href="<?php echo site_url(); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>assets/images/login-logo.png" alt="Basic Project">
            </a>
        </div>
    </div>
    <div class="small-20 columns">
        <div class="full-menu">
            <?php // Remember to create a new main menu named main-menu in the wp-admin ?>
			<?php wp_nav_menu( array(
				'menu_id'		    => 'main-menu',
				'theme_location' 	=> 'header-menu'
			) );
			?>
        </div>
    </div>
</div>
