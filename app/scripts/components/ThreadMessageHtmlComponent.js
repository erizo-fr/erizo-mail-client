Client.ThreadMessageHtmlComponent = Ember.Component.extend({

    didInsertElement: function () {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, function () {
            //Get iframe
            var model = this.get('model');
            var iframe = this.$('iframe');
            var iframeContent = iframe.contents();

            //Set content
            var htmlModel = model;
            iframeContent.find('html').html(model);

            //Set CSS
            iframeContent.find('html').css('background-color', 'rgb(250, 250, 250)');

            //Resize
            Ember.Logger.debug('Resizing iframe: ' + iframe);
            var iframBodyHeight = iframeContent.find("html").height();
            Ember.Logger.debug('iframe content height: ' + iframBodyHeight);
            iframe.height(iframBodyHeight);
        });
    }

});