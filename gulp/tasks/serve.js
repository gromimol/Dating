module.exports = function () {
    $.gulp.task('serve', function () {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "member-area-part-1_messages.html"
            }
        });
    });
}
