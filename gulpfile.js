// var gulp  = require("gulp"),
//     gutil = require("gulp-util"),
//     jshint = require("gulp-jshint"),
//     sourcemaps = require("gulp-sourcemaps"),
//     concat = require("gulp-concat"),
//     uglifycss = require("gulp-uglifycss"),
//     angTemplateCache = require("gulp-angular-templatecache"), //bundles templates directly into application using $templateCache
//     exec = require('child_process').exec;



// //Default gusp task
// gulp.task("default", ["html", "template-html", "css", "js", "move", "server"]);

// //Send main index html
// gulp.task('html', function () {
//     return gulp.src('./public/src/index.html')
//         .pipe(gulp.dest('./public/build'))
// });

// //Template Angular Html Views
// //Note: These are sent as template.js to the src folder, and then concatenated with
// //the rest of the js files in "js" task
// gulp.task('template-html', function () {
// 	var options = {
// 		module: "app"
// 	}

//   return gulp.src([
//   	'./public/src/**/*.html',
//   	'!./public/src/index.html'
//   	])
//     .pipe(angTemplateCache(options))
//     .pipe(gulp.dest('./public/src'))
// });

// //Send main index html
// gulp.task('css', function () {
//     return gulp.src("./public/src/**/*.css")
//     		.pipe(concat("stylesheet.css"))
//     		.pipe(uglifycss())
//         .pipe(gulp.dest("./public/build/assets/css"))
// });

// //Build all javascript files into bundle.js to public script
// //Run gulp --type production to uglify file
// gulp.task("js", ["template-html"], function() {

// 	return gulp.src([
	
//     "./public/src/assets/js/libs/angular.min.js",
//     "./public/src/assets/js/libs/angular-route.min.js",
//     "./public/src/assets/js/libs/angular-resource.js",
//     "./public/src/assets/js/libs/angular-ui-router.min.js",
//     "./public/src/assets/js/libs/angular-mocks.js",
// 	"./public/src/app.js", //Make sure the app.js file precedes all other js, or the other modules will not load
// 	"!./public/src/**/*-test.js",
// 	"./public/src/**/*.js"
// 	])
// 	.pipe(sourcemaps.init())
// 	.pipe(concat("app.js"))
// 	//.pipe(ngAnnotate())
// 	//.pipe(uglify())
// 	.pipe(gulp.dest("./public/build"))

// });

// //Move files to the build without editing them
// gulp.task("move", function(){

//     var filesToMove = [
//       "./public/src/data/**/*.*",
//     ];

// // the base option sets the relative root for the set of files,
// // preserving the folder structure
//     gulp.src(filesToMove, { base: "./public/src" })
//   	.pipe(gulp.dest("./public/build/"));
// });

// //watch any file changes and send them jshint
// gulp.task("watch", function(){
	
//     gulp.watch("./public/src/index.html", ["html"]);
//     gulp.watch("./public/src/**/*.html", ["template-html"]);
//     gulp.watch("./public/src/**/*.css", ["css"]);
//     //gulp.watch("./public/src/**/*.js", ["jshint"]);
//     gulp.watch("./public/src/**/*.js", ["js"]);
    
//     return gutil.log("Gulp is running!");

// });

// //Static server
// gulp.task('server', function (cb) {
//     exec('mongo', function (err, stdout, stderr) {
//         console.log(stdout);
//         console.log(stderr);
//         console.log('mongo running');
//         cb(err);
//     });
//     exec('npm start', function (err, stdout, stderr) {
//       console.log(stdout);
//       console.log(stderr);
//       console.log('npm start ran');
      
//       cb(err);
//     });
//   })

// //DEPENDENT GULP TASKS

// // Setup jshint linter with styled format
// gulp.task("jshint", ["js"], function(){
// 	return gulp.src("./public/src/**/*.js")
// 		.pipe(jshint())
// 		.pipe(jshint.reporter("jshint-stylish"));
// });

// //Update browser after any file changes
// gulp.task("reload", ["html", "template-html", "css", "js"], function(){
// 	done();
// })