/**
 * Plus WebP
 *
 * @package Plus WebP
 * @subpackage jquery.bulkgeneratewebp.js
/*  Copyright (c) 2019- Katsushi Kawamori (email : dodesyoswift312@gmail.com)
	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; version 2 of the License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

jQuery(
	function($){

		/* Control of the Enter key */
		$( 'input[type!="submit"][type!="button"]' ).keypress(
			function(e){
				if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
					return false;
				} else {
					return true;
				}
			}
		);

		/* Ajax for Register */
		var bulkgeneratewebp_defer = $.Deferred().resolve();
		$( '#bulkgeneratewebp_ajax_update' ).click(
			function(){

				$( "#bulkgeneratewebp-loading-container" ).empty();

				$( "#bulkgeneratewebp-loading-container" ).append( "<div id=\"bulkgeneratewebp-update-progress\"><progress value=\"0\" max=\"100\"></progress> 0%</div><button type=\"button\" id=\"bulkgeneratewebp_ajax_stop\">" + bulkgeneratewebp_text.stop_button + "</button>" );
				$( "#bulkgeneratewebp-loading-container" ).append( "<div id=\"bulkgeneratewebp-update-result\"></div>" );
				var update_continue = true;
				/* Stop button */
				$( "#bulkgeneratewebp_ajax_stop" ).click(
					function() {
						update_continue = false;
						$( "#bulkgeneratewebp_ajax_stop" ).text( bulkgeneratewebp_text.stop_message );
					}
				);

				var count = 0;
				var success_count = 0;
				var error_count = 0;
				var error_update = "";
				var ids = JSON.parse( bulkgeneratewebp_data.id );

				$.each(
					ids,
					function(i){
						var j = i;
						bulkgeneratewebp_defer = bulkgeneratewebp_defer.then(
							function(){
								if ( update_continue == true ) {
									return $.ajax(
										{
											type: 'POST',
											cache : false,
											url: bulkgeneratewebp.ajax_url,
											data: {
												'action': bulkgeneratewebp.action,
												'nonce': bulkgeneratewebp.nonce,
												'maxcount': bulkgeneratewebp_data.count,
												'id': ids[j],
											}
										}
									).then(
										function(result){
											count += 1;
											success_count += 1;
											$( "#bulkgeneratewebp-update-result" ).append( result );
											$( "#bulkgeneratewebp-update-progress" ).empty();
											var progressper = Math.round( ( count / bulkgeneratewebp_data.count ) * 100 );
											$( "#bulkgeneratewebp-update-progress" ).append( "<progress value=\"" + progressper + "\" max=\"100\"></progress> " + progressper + "%" );
											if ( count == bulkgeneratewebp_data.count || update_continue == false ) {
												$.ajax(
													{
														type: 'POST',
														url: bulkgeneratewebp_mes.ajax_url,
														data: {
															'action': bulkgeneratewebp_mes.action,
															'nonce': bulkgeneratewebp_mes.nonce,
															'error_count': error_count,
															'error_update': error_update,
															'success_count': success_count,
														}
													}
												).done(
													function(result){
														$( "#bulkgeneratewebp-update-progress" ).empty();
														$( "#bulkgeneratewebp-update-progress" ).append( result );
														$( "#bulkgeneratewebp_ajax_stop" ).hide();
													}
												);
											}
										}
									).fail(
										function( jqXHR, textStatus, errorThrown){
											error_count += 1;
											error_update += "<div>ID: " + ids[j] + " : error -> status " + jqXHR.status + ' ' + textStatus.status + "</div>";
										}
									);
								}
							}
						);
					}
				);
				return false;
			}
		);
	}
);
