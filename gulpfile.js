var gulp=require("gulp");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var minifycss=require("gulp-minify-css");
var server=require("gulp-webserver");
gulp.task("js", function () {
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("js/"))
})
gulp.task("css", function () {
    gulp.src("./css/*.css")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest("css/"))
})
gulp.task("server", function () {
    gulp.src("./")
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true

        }))
})
