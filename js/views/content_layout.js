define([
	'jquery',
	'underscore',
	'backbone',
	'views/youtube_search_results',
	'views/youtube_playlists_results'
], function($, _, Backbone, YoutubeSearchResults, YoutubePlaylistsResults) {
	
	var ContentLayout = Backbone.View.extend({
		el: '#search-results',

		switcher: {
			key: 'filter',
			views: {
				videos: YoutubeSearchResults,
				playlists: YoutubePlaylistsResults
			}
		},

		initialize: function() {
			// TODO - should remove on first collection reset
			this.$el.find('.well').remove();
		}
	});

	return ContentLayout;
});