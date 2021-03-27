module.exports = function () {
    $.gulp.task('serve', function () {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "member-area-part-3_banner_card_payment.html"
            }
        });
    });
}
