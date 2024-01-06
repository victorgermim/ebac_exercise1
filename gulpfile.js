const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin').default;


// Função para comprimir imagens
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


// Função para comprimir JavaScript
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js') 
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

// Função para compilar SASS
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError)) 
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles/'));
}

// Tarefa padrão
exports.default = function () {
    gulp.watch('./source/styles/**/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}