'use strict';

import config from '../config';
import gulp   from 'gulp';
import notify from 'gulp-notify';

gulp.task('bower', function () {
    var wiredep = require('wiredep').stream;
    return gulp.src(config.views.index)
        .pipe(wiredep({
            directory: 'bower_components'
        }))
        .pipe(gulp.dest(config.buildDir))
        .pipe(notify({message: 'Bower dependencies updated'}));
});