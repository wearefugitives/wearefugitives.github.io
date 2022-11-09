var bg = {
	settings : {
		imageW : 1600,
		imageH : 1608
	},
	$img : false,
	init: function () {
		this.$wrap = $('body');
		this.$img = $('.bg').children('img')
		this.ratio = this.settings.imageW / this.settings.imageH;

		this.setBg();
		this.$wrap.on('resize', bg.setBg());

	},
	setBg : function() {
		this.bgRatio = 	this.$wrap.width() / this.$wrap.height();

		if (bg.bgRatio < bg.ratio) {
			this.$img.css({
				'height': '100%',
				'width': 'auto'
			});
		} else {
			this.$img.css({
				'width': '100%',
				'height': 'auto'
			});
		}
	}
}
