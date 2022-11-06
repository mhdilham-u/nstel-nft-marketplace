const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const useref = require("gulp-useref");

// Build Sass Task
function buildStylesTask() {
  return src("./assets/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./assets/css/"));
}

// Watch Sass Task
function watchStylesTask() {
  watch("./assets/sass/**/*.scss", buildStylesTask);
}

// Copy Plugin Task
// function copyPluginsTask() {
//   return src("./node_modules/boxicons*/**/*")
//   .pipe(useref())
//   .pipe(dest("./assets/plugins/"));
// }

exports.default = series(buildStylesTask, watchStylesTask);
