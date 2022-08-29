import gulpSass from 'gulp-sass';
import nodeSass from 'sass';

import gulp from 'gulp';
const sass = gulpSass(nodeSass);
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import gap from 'gulp-append-prepend';
import touch from 'gulp-touch-cmd';
import pkg from './package.json' assert { type: 'json' };
import { deleteAsync } from 'del';

gulp.task('scss-min', () => {
  return gulp
    .src('src/scss/index.scss')
    .pipe(
      gap.prependText(['/*!', ' * ' + pkg.description, ' * @version v' + pkg.version, ' * @license ' + pkg.license, ' */', ''].join('\n'))
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        level: 2,
        specialComments: 'all'
      })
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(touch());
});

// Assets
gulp.task('assets', () => {
  return gulp.src(['src/assets/**']).pipe(gulp.dest('dist/cjs/assets')).pipe(gulp.dest('dist/esm/assets')).pipe(touch());
});

gulp.task('clean', function () {
  return deleteAsync('dist/**', { force: true });
});

// Components style
gulp.task('components', () => {
  return gulp.src(['src/components/**/*.scss']).pipe(gulp.dest('dist/cjs/components')).pipe(gulp.dest('dist/esm/components')).pipe(touch());
});

gulp.task('scss', () => {
  return gulp.src(['src/scss/**']).pipe(gulp.dest('dist/cjs/scss')).pipe(gulp.dest('dist/esm/scss')).pipe(touch());
});

gulp.task('build', gulp.series('scss-min', 'assets', 'components', 'scss'));
