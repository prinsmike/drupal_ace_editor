(function ($) {
	"use strict";

	Drupal.wysiwyg.editor.instances = [];

	/**
	 * Attach this editor to a target element.
	 */
	 Drupal.wysiwyg.editor.attach.ace = function (context, params, settings) {
	 	var textarea = $('#' + params.field)
	 	// Give the incipient editor a wrapper to expand to.
	 	.wrap('<div class="wysiwyg-ace-wrapper">')
	 	// Create a DIV to target.
	 	.after('<div id="' + params.field + '-ace">');
	 	// Attach the editor.
	 	var editor = Drupal.wysiwyg.editor.instances[params.field] = ace.edit(params.field + '-ace');
	 	// Apply user configured settings.
	 	editor.setTheme(settings.theme);
	 	editor.getSession().setMode(settings.mode);
	 	editor.setHighlightActiveLine(settings.hasOwnProperty('highlight_active_line'));
	 	editor.setHighlightSelectedWord(settings.hasOwnProperty('highlight_selected_word'));
	 	editor.setShowFoldWidgets(settings.hasOwnProperty('show_fold_widgets'));
	 	editor.setShowInvisibles(settings.hasOwnProperty('show_invisibles'));
	 	editor.setShowPrintMargin(settings.hasOwnProperty('show_print_margin'));
	 	editor.getSession().setTabSize(settings.tab_size);
	 	editor.getSession().setUseSoftTabs(settings.hasOwnProperty('use_soft_tabs'));
	 	editor.getSession().setUseWrapMode(settings.hasOwnProperty('use_wrap_mode'));
	 	// Populate the editor from the TEXTAREA.
	 	editor.getSession().setValue(textarea.val());
	 };

	 /**
	  * Detach an editor.
	  */
	  Drupal.wysiwyg.editor.detach.ace = function(context, params, trigger) {
	  	if (params != undefined) {
	  		var editor = Drupal.wysiwyg.editor.instances[params.field];
	  		var textarea = $('#' + params.field);
	  		// Save the contents back to the textarea.
	  		texarea.val(editor.getSession().getValue());
	  		if (trigger === 'unload') {
	  			// Destroy the editor.
	  			$('#' + params.field).unwrap('<div>');
	  			$('#' + params.field + '-ace').remove();
	  		}
	  	}
	  };
})(jQuery);