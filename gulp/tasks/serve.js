module.exports = function () {
    $.gulp.task('serve', function () {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "member-area-part-2_account_settings.html"
            }
        });
    });
}
