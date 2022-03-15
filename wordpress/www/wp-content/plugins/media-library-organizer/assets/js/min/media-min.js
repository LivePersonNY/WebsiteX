function mediaLibraryOrganizerQueryInitialize(){!function(){wp.media.query=function(e){return new wp.media.model.Attachments(null,{props:_.extend(_.defaults(e||{},{orderby:media_library_organizer_media.defaults.orderby,order:media_library_organizer_media.defaults.order}),{query:!0})})};var e=wp.media.model.Query,r;_.extend(e,{get:(r=[],function(i,a){var t={},n=e.orderby,o=e.defaultProps,d,m=!1;return delete i.query,delete i.cache,_.defaults(i,o),i.order=i.order.toUpperCase(),"DESC"!==i.order&&"ASC"!==i.order&&(i.order=o.order.toUpperCase()),_.contains(n.allowed,i.orderby)||(i.orderby=o.orderby),_.each(["include","exclude"],(function(e){i[e]&&!_.isArray(i[e])&&(i[e]=[i[e]])})),_.each(i,(function(r,i){_.isNull(r)||(t[e.propmap[i]||i]=r)})),_.defaults(t,e.defaultArgs),t.orderby=n.valuemap[i.orderby]||i.orderby,m=!1,r=[],d||(d=new e([],_.extend(a||{},{props:i,args:t})),r.push(d)),wp.media.events.trigger("mlo:grid:query",{query:d}),d})})}(jQuery,_)}function mediaLibraryOrganizerUploaderInitializeEvents(){!function($,e){void 0!==wp.Uploader&&e.extend(wp.Uploader.prototype,{init:function(){wp.media.events.trigger("mlo:grid:attachment:upload:init")},added:function(e){wp.media.events.trigger("mlo:grid:attachment:upload:added",e)},progress:function(e){wp.media.events.trigger("mlo:grid:attachment:upload:progress",e)},success:function(e){wp.media.events.trigger("mlo:grid:attachment:upload:success",e)},error:function(e){wp.media.events.trigger("mlo:grid:attachment:upload:error",e)},complete:function(){wp.media.events.trigger("mlo:grid:attachment:upload:complete")},refresh:function(){wp.media.events.trigger("mlo:grid:attachment:upload:refresh")}})}(jQuery,_)}function mediaLibraryOrganizerGridViewInitializeTaxonomyFilters(){!function(){for(let e in media_library_organizer_media.taxonomies)mediaLibraryOrganizerGridViewInitializeTaxonomyFilter(e,media_library_organizer_media.taxonomies[e].terms,media_library_organizer_media.taxonomies[e].taxonomy.labels.all_items,media_library_organizer_media.labels.unassigned,media_library_organizer_media.show_attachment_count)}(jQuery,_)}function mediaLibraryOrganizerGridViewInitializeTaxonomyFilter(e,r,i,a,t){jQuery,_,"0"!=media_library_organizer_media.settings[e+"_enabled"]&&media_library_organizer_media.settings[e+"_enabled"]&&(MediaLibraryOrganizerTaxonomyFilter[e]=wp.media.view.AttachmentFilters.extend({id:"media-attachment-taxonomy-filter-"+e,createFilters:function(){var n={},o,o;_.each(r||{},(function(r,i){var a={};a[e]=r.slug;var o=r.name+("1"===t?" ("+r.count+")":"");n[i]={text:o,props:a}})),(o={})[e]="",n.all={text:i,props:o,priority:10},(o={})[e]="-1",n.unassigned={text:a,props:o,priority:10},this.filters=n},change:function(){var r=this.filters[this.el.value];r&&(this.model.set(r.props),wp.media.events.trigger("mlo:grid:filter:change:term",{taxonomy_name:e,slug:r.props[e]}))},select:function(){var e=this.model,r="all",i=e.toJSON();wp.media.events.trigger("mlo:grid:filter:select",{props:i}),_.find(this.filters,(function(e,a){var t;if(_.all(e.props,(function(e,r){return e===(_.isUndefined(i[r])?null:i[r])})))return r=a})),this.$el.val(r)}}))}function mediaLibraryOrganizerGridViewInitializeOrderByFilter(){jQuery,_,1==media_library_organizer_media.settings.orderby_enabled&&(MediaLibraryOrganizerTaxonomyOrderBy=wp.media.view.AttachmentFilters.extend({id:"media-attachment-orderby",createFilters:function(){var e={};_.each(media_library_organizer_media.orderby||{},(function(r,i){e[i]={text:r,props:{orderby:i}}})),this.filters=e},select:function(){var e=this.model,r="all",i=e.toJSON();_.find(this.filters,(function(e,a){var t;if(_.all(e.props,(function(e,r){return e===(_.isUndefined(i[r])?null:i[r])})))return r=a})),this.$el.val(r)}}))}function mediaLibraryOrganizerGridViewInitializeOrderFilter(){jQuery,_,1==media_library_organizer_media.settings.order_enabled&&(MediaLibraryOrganizerTaxonomyOrder=wp.media.view.AttachmentFilters.extend({id:"media-attachment-order",createFilters:function(){var e={};_.each(media_library_organizer_media.order||{},(function(r,i){e[i]={text:r,props:{order:i}}})),this.filters=e},select:function(){var e=this.model,r="all",i=e.toJSON();_.find(this.filters,(function(e,a){var t;if(_.all(e.props,(function(e,r){return e===(_.isUndefined(i[r])?null:i[r])})))return r=a})),this.$el.val(r)}}))}function mediaLibraryOrganizerGridViewAddFiltersToToolbar(){var e;jQuery,_,e=wp.media.view.AttachmentsBrowser,wp.media.view.AttachmentsBrowser=wp.media.view.AttachmentsBrowser.extend({createToolbar:function(){e.prototype.createToolbar.call(this);var r=-75;for(let e in MediaLibraryOrganizerTaxonomyFilter)this.toolbar.set(e,new MediaLibraryOrganizerTaxonomyFilter[e]({controller:this.controller,model:this.collection.props,priority:r}).render()),r++;1==media_library_organizer_media.settings.orderby_enabled&&(this.toolbar.set("MediaLibraryOrganizerTaxonomyOrderBy",new MediaLibraryOrganizerTaxonomyOrderBy({controller:this.controller,model:this.collection.props,priority:r}).render()),r++),1==media_library_organizer_media.settings.order_enabled&&(this.toolbar.set("MediaLibraryOrganizerTaxonomyOrder",new MediaLibraryOrganizerTaxonomyOrder({controller:this.controller,model:this.collection.props,priority:r}).render()),r++),wp.media.events.trigger("mlo:grid:filters:add",{attachments_browser:this,priority:r}),this.controller.on("select:activate",(function(){wp.media.events.trigger("mlo:grid:bulk_select:enabled")})),this.controller.on("select:deactivate",(function(){wp.media.events.trigger("mlo:grid:bulk_select:disabled")})),this.controller.on("selection:action:done",(function(){wp.media.events.trigger("mlo:grid:attachments:bulk_actions:done")})),MediaLibraryOrganizerAttachmentsBrowser=this},createAttachmentsHeading:function(){e.prototype.createAttachmentsHeading.call(this)}})}function mediaLibraryOrganizerGridViewInitializeEditAttachmentListeners(){!function($,e){var r;$("body").on("click","table.compat-attachment-fields a.taxonomy-add-new",(function(e){e.preventDefault(),mediaLibraryOrganizerEditAttachmentToggleTaxonomyTermForm($(this).data("taxonomy"))})),$("body").on("click","table.compat-attachment-fields div.mlo-taxonomy-term-add-fields input[type=button]",(function(e){e.preventDefault(),mediaLibraryOrganizerEditAttachmentAddTerm($(this).data("taxonomy"),$("input[type=text]",$(this).parent()).val())})),e.extend(wp.media.view.Attachment.prototype,{updateSave:function(e){var i=this._save=this._save||{status:"ready"};return e&&e!==i.status&&(this.$el.removeClass("save-"+i.status),i.status=e),this.$el.addClass("save-"+i.status),"waiting"!=r||"ready"!=i.status&&"complete"!=i.status||wp.media.events.trigger("mlo:grid:edit-attachment:edited",{attachment_id:this.model.id,attachment:this.model.attributes,changed:this.model.changed,taxonomy_term_changed:void 0!==this.model.changed.compat}),r=i.status,this}}),e.extend(wp.media.view.Attachment.Details.prototype,{moveFocus:function(){wp.media.events.trigger("mlo:grid:edit-attachment:deleted"),this.previousAttachment.length?this.previousAttachment.focus():this.nextAttachment.length?this.nextAttachment.focus():this.controller.uploader&&this.controller.uploader.$browser?this.controller.uploader.$browser.focus():this.moveFocusToLastFallback()}})}(jQuery,_)}function mediaLibraryOrganizerGridViewReplaceTaxonomyFilter(e,r,i,a,t){var $;$=jQuery,MediaLibraryOrganizerTaxonomyFilter.hasOwnProperty(e)&&(mediaLibraryOrganizerGridViewInitializeTaxonomyFilter(e,r,i,a,t),MediaLibraryOrganizerAttachmentsBrowser.toolbar.set(e,new MediaLibraryOrganizerTaxonomyFilter[e]({controller:MediaLibraryOrganizerAttachmentsBrowser.controller,model:MediaLibraryOrganizerAttachmentsBrowser.collection.props,priority:-75}).render()))}function mediaLibraryOrganizerGridViewUpdateTaxonomyFilters(){var $;($=jQuery).post(media_library_organizer_media.ajaxurl,{action:media_library_organizer_media.get_taxonomies_terms.action,nonce:media_library_organizer_media.get_taxonomies_terms.nonce},(function(e){if(e.success)for(let r in e.data)mediaLibraryOrganizerGridViewReplaceTaxonomyFilter(e.data[r].taxonomy.name,e.data[r].terms,e.data[r].taxonomy.labels.all_items,media_library_organizer_media.labels.unassigned);else alert(e.data)}))}function mediaLibraryOrganizerGridViewUpdateTaxonomyFilter(e){var $;($=jQuery).post(media_library_organizer_media.ajaxurl,{action:media_library_organizer_media.get_taxonomy_terms.action,nonce:media_library_organizer_media.get_taxonomy_terms.nonce,taxonomy_name:e},(function(e){e.success?mediaLibraryOrganizerGridViewReplaceTaxonomyFilter(e.data.taxonomy.name,e.data.terms,e.data.taxonomy.labels.all_items,media_library_organizer_media.labels.unassigned):alert(e.data)}))}function mediaLibraryOrganizerListViewReplaceTaxonomyFilter(e,r,i){var $;($=jQuery)("select#"+e).replaceWith(r),i.length>0&&$("select#"+e).val(i)}function mediaLibraryOrganizerListViewUpdateAttachmentTerms(e,r,i){var $;($=jQuery)("td.taxonomy-"+e+" a").each((function(){$(this).text()==r.name&&(i?($(this).text(i.name),$(this).attr("href","upload.php?taxonomy="+e+"&term="+i.slug)):$(this).remove())})),$("td.taxonomy-"+e).each((function(){$(this).html($(this).html().replace(/(^\s*,)|(,\s*$)/g,""))}))}function mediaLibraryOrganizerEditAttachmentToggleTaxonomyTermForm(e){var $;($=jQuery)(".mlo-taxonomy-term-add-fields."+e).hasClass("hidden")?$(".mlo-taxonomy-term-add-fields."+e).removeClass("hidden"):$(".mlo-taxonomy-term-add-fields."+e).addClass("hidden")}function mediaLibraryOrganizerEditAttachmentResetTaxonomyTermForm(e){var $;($=jQuery)(".mlo-taxonomy-term-add-fields."+e+"input[type=text]").val("")}function mediaLibraryOrganizerEditAttachmentAddTerm(e,r,i){var $,a;$=jQuery,a={action:media_library_organizer_media.create_term.action,nonce:media_library_organizer_media.create_term.nonce,taxonomy_name:e,term_name:r,term_parent_id:i},$.post(media_library_organizer_media.ajaxurl,a,(function(r){r.success?(wp.media.events.trigger("mlo:grid:edit-attachment:added:term",r.data),$("ul#"+r.data.term.taxonomy+"checklist").prepend(r.data.checkbox),mediaLibraryOrganizerEditAttachmentResetTaxonomyTermForm(e),$("ul#"+r.data.term.taxonomy+'checklist li:first input[type="checkbox"]').trigger("change")):alert(r.data)}))}function mediaLibraryOrganizerGridViewRefresh(){void 0!==wp.media.frame.library?wp.media.frame.library.props.set({ignore:+new Date}):wp.media.frame.content.get().collection.props.set({ignore:+new Date})}function mediaLibraryOrganizerInitialize(){mediaLibraryOrganizerQueryInitialize(),mediaLibraryOrganizerUploaderInitializeEvents(),mediaLibraryOrganizerGridViewInitializeTaxonomyFilters(),mediaLibraryOrganizerGridViewInitializeOrderByFilter(),mediaLibraryOrganizerGridViewInitializeOrderFilter(),mediaLibraryOrganizerGridViewAddFiltersToToolbar(),mediaLibraryOrganizerGridViewInitializeEditAttachmentListeners(),jQuery(document).ready((function($){"undefined"!=typeof mediaLibraryOrganizerSelectizeInit&&mediaLibraryOrganizerSelectizeInit()}))}var mediaLibraryOrganizerUploader=!1,MediaLibraryOrganizerTaxonomyFilter={},MediaLibraryOrganizerTaxonomyOrderBy,MediaLibraryOrganizerTaxonomyOrder,MediaLibraryOrganizerAttachmentsBrowser;wp.media.events.on("mlo:grid:attachment:upload:init",(function(){if(mediaLibraryOrganizerUploader||void 0===wp.media.frame.uploader||(mediaLibraryOrganizerUploader=wp.media.frame.uploader),mediaLibraryOrganizerUploader){var e={};for(let r in media_library_organizer_media.taxonomies)e[r]=media_library_organizer_media.taxonomies[r].selected_term;mediaLibraryOrganizerUploader.uploader.uploader.settings.multipart_params.media_library_organizer=e}})),wp.media.events.on("mlo:grid:filter:change:term",(function(e){mediaLibraryOrganizerUploader&&(mediaLibraryOrganizerUploader.uploader.uploader.settings.multipart_params.media_library_organizer[e.taxonomy_name]=e.slug)})),wp.media.events.on("mlo:grid:attachment:upload:success",(function(e){mediaLibraryOrganizerGridViewRefresh()})),wp.media.events.on("mlo:grid:edit-attachment:added:term",(function(e){mediaLibraryOrganizerGridViewReplaceTaxonomyFilter(e.taxonomy.name,e.terms,e.taxonomy.labels.all_items,media_library_organizer_media.labels.unassigned)})),wp.media.events.on("mlo:grid:edit-attachment:edited",(function(e){var $;$=jQuery,e.taxonomy_term_changed&&(mediaLibraryOrganizerGridViewUpdateTaxonomyFilters(),mediaLibraryOrganizerGridViewRefresh())})),wp.media.events.on("mlo:grid:edit-attachment:deleted",(function(e){mediaLibraryOrganizerGridViewUpdateTaxonomyFilters()})),wp.media.events.on("mlo:grid:bulk_select:disabled",(function(){mediaLibraryOrganizerGridViewUpdateTaxonomyFilters()})),mediaLibraryOrganizerInitialize();