Package.describe({
	name:          'msavin:mongoshare',
	summary:       'Share One Mongo Database Among Multiple Applications - Seamlessly!',
	version:       '1.0.0',
	git:           'https://github.com/msavin/mongoshare.git',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.addFiles('main.js');

	api.use(["mongo"]);

});