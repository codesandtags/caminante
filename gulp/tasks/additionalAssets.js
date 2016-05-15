'use strict';

import gulp from 'gulp';
import config from '../config';
import notify from 'gulp-notify';

gulp.task('additional-assets', function(){
    return gulp.src(config.additionalAssets)
        .pipe(gulp.dest(config.buildDir))
        .pipe(notify({message:config.messages.bowerUpdated}));
});