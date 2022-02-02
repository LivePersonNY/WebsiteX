<div class="wrap">
    <h1 class="wp-heading-inline">
        <?php echo $this->plugin->displayName; ?>

        <span>
            <?php _e( 'Import &amp; Export', $this->plugin->name ); ?>
        </span>
    </h1>

    <hr class="wp-header-end" />

    <?php
    // Notices
    if ( isset( $this->message ) ) {
        ?>
        <div class="updated notice"><p><?php echo $this->message; ?></p></div>  
        <?php
    }
    if ( isset( $this->errorMessage ) ) {
        ?>
        <div class="error notice"><p><?php echo $this->errorMessage; ?></p></div>  
        <?php
    }
    ?>

    <div class="wrap-inner">
	    <!-- Tabs -->
		<h2 class="nav-tab-wrapper wpzinc-horizontal-tabbed-ui">
			<a href="<?php echo $this->plugin->documentation_url; ?>" class="nav-tab last documentation" rel="noopener" target="_blank">
    			<?php _e( 'Documentation', $this->plugin->name ); ?>
    			<span class="dashicons dashicons-admin-page"></span>
    		</a>
		</h2>
			
		<form name="post" method="post" action="<?php echo esc_attr( $_SERVER['REQUEST_URI'] ); ?>" id="<?php echo $this->plugin->name; ?>" enctype="multipart/form-data">
			<div id="poststuff">
		    	<div id="post-body" class="metabox-holder columns-1">
		    		<!-- Content -->
		    		<div id="post-body-content">
			            <div id="normal-sortables" class="meta-box-sortables ui-sortable publishing-defaults">  
			            	<div class="postbox wpzinc-vertical-tabbed-ui">
			            		<!-- Second level tabs -->
							    <ul class="wpzinc-nav-tabs wpzinc-js-tabs" data-panels-container="#import-export-container" data-panel=".panel" data-active="wpzinc-nav-tab-vertical-active">
							        <li class="wpzinc-nav-tab download">
							            <a href="#import" class="wpzinc-nav-tab-vertical-active">
							                 <?php _e( 'Import', $this->plugin->name ); ?>
							            </a>
							        </li>
							        <?php
							        if ( is_array( $import_sources ) && count( $import_sources ) > 0 ) {
							        	foreach ( $import_sources as $import_source ) {
							        		?>
							        		<li class="wpzinc-nav-tab <?php echo $import_source['name']; ?>">
									            <a href="#<?php echo $import_source['name']; ?>">
									                 <?php echo $import_source['label']; ?>
									            </a>
									        </li>
									        <?php
							        	}
							        }
							        ?>
							        <li class="wpzinc-nav-tab upload">
							            <a href="#export">
							                 <?php _e( 'Export', $this->plugin->name ); ?>
							            </a>
							        </li>
							    </ul>

								<!-- Content -->
							    <div id="import-export-container" class="wpzinc-nav-tabs-content no-padding">
							        <!-- Import -->
							        <div id="import" class="panel">
							            <div class="postbox">
							                <header>
							                    <h3><?php _e( 'Import', $this->plugin->name ); ?></h3>
							                    <p class="description">
							                        <?php _e( 'Upload a file generated by this Plugin\'s export functionality  (JSON or zipped JSON).  This will overwrite any existing settings stored on this installation.', $this->plugin->name ); ?>
							                    </p>
							                </header>

							                <div class="wpzinc-option">
							                    <div class="left">
							                        <label for="file"><?php _e( 'JSON File', $this->plugin->name ); ?></label>
							                    </div>
							                    <div class="right">
							                        <input type="file" id="file" name="import" />
							                    </div>
							                </div>

							                <div class="wpzinc-option">
							                    <input name="import" type="submit" class="button button-primary" value="<?php _e( 'Import', $this->plugin->name ); ?>" />              
							                </div>
							            </div>
							        </div>

							        <?php
							        if ( is_array( $import_sources ) && count( $import_sources ) > 0 ) {
							        	foreach ( $import_sources as $import_source ) {
							        		include_once( $import_source['view'] );
							        	}
							        }
							        ?>

							        <!-- Export -->
							        <div id="export" class="panel">
							            <div class="postbox">
							                <header>
							                    <h3><?php _e( 'Export', $this->plugin->name ); ?></h3>
							                    <p class="description">
							                        <?php _e( 'To export this Plugin\'s settings, choose which item(s) to export, and click the Export button below.', $this->plugin->name ); ?>
							                        <br />
							                        <?php _e( 'You can then import the generated file into another Plugin installation.', $this->plugin->name ); ?>
							                        <br />
							                        <?php _e( 'Including this file in a support request? We recommend setting the Format option to "Export as JSON, Zipped".', $this->plugin->name ); ?>
							                    </p>
							                </header>

							                <?php
							                /**
							                 * Add any form options to the Export screen
							                 *
							                 * @since 	1.0.0
							                 */
							                do_action( str_replace( '-', '_', $this->plugin->name ) . '_export_view' );
							                ?>

							                <div class="wpzinc-option">
							                	<div class="left">
							                		<label for="format"><?php _e( 'Format', $this->plugin->name ); ?></label>
							                	</div>
							                	<div class="right">
							                		<select name="format" id="format" size="1">
							                			<option value="json"><?php _e( 'JSON', $this->plugin->name ); ?></option>
							                			<option value="zip"><?php _e( 'JSON, Zipped', $this->plugin->name ); ?></option>
							                		</select>
							                	</div>
							                </div>

							                <div class="wpzinc-option">
							                	<input name="export" type="submit" class="button button-primary" value="<?php _e( 'Export', $this->plugin->name ); ?>" />              
							                </div>
							            </div>
							        </div>
							    </div>
			            	</div>

			            	<?php
				         
				            wp_nonce_field( $this->plugin->name, $this->plugin->name . '_nonce' );
				            ?>
						</div>
						<!-- /normal-sortables -->
		    		</div>
		    		<!-- /post-body-content -->
		    	</div>
			</div> 
			<!-- /poststuff -->
		</form>
	</div><!-- /.wrap-inner -->
</div>