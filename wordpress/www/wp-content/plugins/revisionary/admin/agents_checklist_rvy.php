<?php
if( basename(__FILE__) == basename(esc_url_raw($_SERVER['SCRIPT_FILENAME'])) )
	die();
 
define ('CURRENT_ITEMS_RVY', 'current');
define ('ELIGIBLE_ITEMS_RVY', 'eligible');
 
 // TODO: scale this down more, as it's overkill for Revisionary's usage
 class RevisionaryAgentsChecklist {
	public static function agents_checklist( $role_basis, $all_agents, $id_prefix = '', $stored_assignments = '', $args = '') {
		if ( empty($all_agents) )
			return;

		$key = array();
		
		// list current selections on top first
		if ( $stored_assignments )
			self::_agents_checklist_display( CURRENT_ITEMS_RVY, $role_basis, $all_agents, $id_prefix, $stored_assignments, $args, $key); 
		
		self::_agents_checklist_display( ELIGIBLE_ITEMS_RVY, $role_basis, $all_agents, $id_prefix, $stored_assignments, $args, $key); 

		echo '<div id="rvy-agents-checklist-spacer">&nbsp;</div>';

		if ( $key ) {
			if ( empty($args['suppress_extra_prefix']) )
				$id_prefix .= "_{$role_basis}";
		}
	}
	
	// stored_assignments[agent_id][inherited_from] = progenitor_assignment_id (note: this function treats progenitor_assignment_id as a boolean)
	static function _agents_checklist_display( $agents_subset, $role_basis, $all_agents, $id_prefix, $stored_assignments, $args, &$key) {
		$defaults = array( 
		'filter_threshold' => 10, 			'default_hide_threshold' => 20,		'caption_length_limit' => 20, 		'emsize_threshold' => 4
		);

		$args = (array) $args;
		foreach( array_keys( $defaults ) as $var ) {
			$$var = ( isset( $args[$var] ) ) ? $args[$var] : $defaults[$var];
		}

		global $is_IE;
		$ie_checkbox_style = ( $is_IE ) ? "style='height:1em'" : '';
		
		if ( ! is_array($stored_assignments) ) $stored_assignments = array();

		$id_prefix .= "_{$role_basis}";
		
		$agent_count = array();
		
		$agent_count[CURRENT_ITEMS_RVY] = count($stored_assignments);
		
		$agent_count[ELIGIBLE_ITEMS_RVY] = count($all_agents) - count( $stored_assignments );
					
		$default_hide_filtered_list = ( $default_hide_threshold && ( $agent_count[$agents_subset] > $default_hide_threshold ) );
			
		$checked = ( $agents_subset == CURRENT_ITEMS_RVY ) ? $checked = "checked='checked'" : '';

		// determine whether to show caption, show/hide checkbox and filter textbox
		$any_display_filtering = ($agent_count[CURRENT_ITEMS_RVY] > $filter_threshold) || ($agent_count[ELIGIBLE_ITEMS_RVY] > $filter_threshold);
		
		if ( $agent_count[$agents_subset] > $filter_threshold ) {

			$caption = ( CURRENT_ITEMS_RVY == $agents_subset ) ? __('show current users (%d)', 'revisionary') : __('show eligible users (%d)', 'revisionary');

			$js_call = "agp_display_if('div_{$agents_subset}_{$id_prefix}', this.id);"
					. "agp_display_if('chk-links_{$agents_subset}_{$id_prefix}', this.id);";
	
			$flt_checked = ( ! $default_hide_filtered_list ) ? "checked='checked'" : '';
	
			echo "<ul class='rs-list_horiz rvy-list-horiz'><li>"; // IE6 (at least) does not render label reliably without this
			echo "<input type='checkbox' name='rs-jscheck[]' value='validate_me_{$agents_subset}_{$id_prefix}' id='chk_{$agents_subset}_{$id_prefix}' $flt_checked onclick=\"$js_call\" /> ";
			
			echo "<strong><label for='chk_{$agents_subset}_{$id_prefix}'>";
			printf ($caption, $agent_count[$agents_subset]);
			echo '</label></strong>';
			echo '</li>';
			
			$class = ( $default_hide_filtered_list ) ? '' : 'class="agp_js_show"';
			
			echo "\r\n" . "<li class='rvy-available-agents'>&nbsp;&nbsp;<label for='flt_{$agents_subset}_{$id_prefix}' id='lbl_flt_{$id_prefix}'>";
			_e ( 'filter:', 'revisionary');
			$js_call = "agp_filter_ul('list_{$agents_subset}_{$id_prefix}', this.value, 'chk_{$agents_subset}_{$id_prefix}', 'chk-links_{$agents_subset}_{$id_prefix}');";
			echo " <input type='text' id='flt_{$agents_subset}_{$id_prefix}' size='10' onkeyup=\"$js_call\" />";
			echo "</label></li>";
			
			echo "<li $class style='display:none' id='chk-links_{$agents_subset}_{$id_prefix}'>";
		
			$js_call = "agp_check_by_name('{$id_prefix}[]', true, true, false, 'list_{$agents_subset}_{$id_prefix}', 1);";
			echo "\r\n" . "&nbsp;&nbsp;" . "<a href='javascript:void(0)' onclick=\"$js_call\">";
			_e ('select', 'revisionary');
			echo '</a>&nbsp;&nbsp;';
			
			$js_call = "agp_check_by_name('{$id_prefix}[]', '', true, false, 'list_{$agents_subset}_{$id_prefix}', 1);";
			echo "\r\n" . "<a href='javascript:void(0)' onclick=\"$js_call\">";
			_e( 'unselect', 'revisionary');
			echo "</a>";
			
			echo '</li></ul>';
		}
		
		$title = '';
		
		if ( $any_display_filtering || $agent_count[$agents_subset] > $emsize_threshold ) {
			global $wp_locale;
			$rtl = ( isset($wp_locale) && ('rtl' == $wp_locale->text_direction) );
			
			// -------- determine required list item width -----------
			if ( $caption_length_limit > 40 )
				$caption_length_limit = 40;
			
			if ( $caption_length_limit < 10 )
				$caption_length_limit = 10;
			
			$longest_caption_length = 0;
			
			foreach( $all_agents as $agent ) {
				$id = $agent->ID;
				
				$role_assigned = isset($stored_assignments[$id]);
				
				switch ( $agents_subset ) {
					case CURRENT_ITEMS_RVY:
						if ( ! $role_assigned ) continue 2;
						break;
					default: //ELIGIBLE_ITEMS_RVY
						if ( $role_assigned ) continue 2;
				}
				
				$caption = $agent->display_name;

				if ( strlen($caption) > $longest_caption_length ) {
					if ( strlen($caption) >= $caption_length_limit )
						$longest_caption_length = $caption_length_limit + 2;
					else
						$longest_caption_length = strlen($caption);
				}
			}
			
			if ( $longest_caption_length < 10 )
				$longest_caption_length = 10;
			
			//if ( ! $ems_per_character = rvy_get_option('ems_per_character') )
			if ( defined( 'UI_EMS_PER_CHARACTER') )
				$ems_per_character = UI_EMS_PER_CHARACTER;
			else
				$ems_per_character = 0.85;
			
			$list_width_ems = $ems_per_character * $longest_caption_length;
			
			$ems_integer = intval($list_width_ems);
			$ems_half = ( ($list_width_ems - $ems_integer) >= 0.5 ) ? '_5' : '';
			
			$ul_class = "rs-agents_list_{$ems_integer}{$ems_half}";
			$hide_class = ( $default_hide_filtered_list && $agent_count[$agents_subset] > $filter_threshold ) ? 'class="agp_js_hide"' : '';

			echo "\r\n" . "<div id='div_{$agents_subset}_{$id_prefix}' $hide_class>"
				. "<div class='rs-agents_emsized'>"
				. "<ul class='$ul_class' id='list_{$agents_subset}_{$id_prefix}'>";	
		} else {
			$ul_class = "rs-agents_list_auto";
			echo "\r\n<ul class='$ul_class' id='list_{$agents_subset}_{$id_prefix}'>";
			$rtl = false;
		}
		//-------- end list item width determination --------------
	
		$last_agents = array();
		
		foreach( $all_agents as $agent ) {
			$id = $agent->ID;
			$agent_display_name = $agent->display_name;
			
			$role_assigned = isset($stored_assignments[$id]);
			
			switch ( $agents_subset ) {
				case CURRENT_ITEMS_RVY:
					if ( ! $role_assigned ) continue 2;
					break;
				default: //ELIGIBLE_ITEMS_RVY
					if ( $role_assigned ) continue 2;
			}
			
			// markup for role duration / content date limits
			$title = '';
			$limit_class = '';
			$link_class = '';
			$limit_style = '';
	
			$li_title = "title=' " . strtolower($agent_display_name) . " '";
			
			$this_checked = ( $role_assigned ) ? ' checked="checked"' : '';

			if ( $this_checked )
				$last_agents[] = $id;

			$label_class = '';
				
			echo "\r\n<li $li_title>"
				. "<input type='checkbox' name='{$id_prefix}[]'{$this_checked} value='$id' id='{$id_prefix}{$id}' $ie_checkbox_style />";
			
			echo "<label $title $limit_style for='{$id_prefix}{$id}'{$label_class}>";
			
			$caption = $agent_display_name;
			
			if ( strlen($caption) > $caption_length_limit ) {
				if ( ! empty($rtl) )
					$caption = '...' . substr( $caption, strlen($caption) - $caption_length_limit); 
				else
					$caption = substr($caption, 0, $caption_length_limit) . '...';
			}
			
			$caption = ' ' . $caption;
				
			echo $caption; // str_replace(' ', '&nbsp;', $caption);
			echo '</label></li>';
			
		} //foreach agent
		
		echo "\r\n<li></li></ul>"; // prevent invalid markup if no other li's
		
		if ( CURRENT_ITEMS_RVY == $agents_subset ) {
			$last_agents = implode("~", $last_agents);
			echo "<input type=\"hidden\" id=\"last_{$id_prefix}\" name=\"last_{$id_prefix}\" value=\"$last_agents\" />";
		}
		
		if ( $any_display_filtering || $agent_count[$agents_subset] > $emsize_threshold ) 
			echo '</div></div>';
	}

} // end class
