// ** ->todos diretórios e * -> todos arquivos de todos diretórios

//importando o gulp
var gulp = require('gulp'), // REQUIRED, procura dentro da pasta modules 'gulp'
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync');

gulp.task('default', ['copy'], function () {
    gulp.start('build-img', 'usemin');
});

//task para copiar
gulp.task('copy', ['clean'], function () { //dependencia [''] -> executa o clean e copy
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist')); //copia a pasta src para a dist
});

gulp.task('clean', function () {
    // RETURN // quando terminar o clean, o copy é executado
    return gulp.src('dist')
        .pipe(clean()); //apaga a pasta dist

});

//task para otimizar imagens
//tarefa
gulp.task('build-img', function () {
    /**fluxo de origem/destino **/
    //caminho das img's - fluxo de origem
    gulp.src('dist/src/img/**/*')
        .pipe(imagemin()) //ligando a src -> dist
        .pipe(gulp.dest('dist/src/img')); //leio o src e gravo no destino (dist) - fluxo de destino
});

gulp.task('build-html', function () {
    gulp.src('dist/**/*.html')
        .pipe(usemin({
            'js': [uglify],
            'css': [cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

//browser-sync
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);
});