module.exports = function() {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "add-raiting-to-photo.html"
            }
        });
    });
}
