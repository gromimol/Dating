module.exports = function () {
    $.gulp.task('serve', function () {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "photo-vrf.html"
            }
        });
    });
}
