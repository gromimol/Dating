module.exports = function () {
    $.gulp.task('serve', function () {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "non-escort-member.html"
            }
        });
    });
}
