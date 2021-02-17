var gulp            = require('gulp');
var notify          = require("gulp-notify");
var htmlmin         = require('gulp-htmlmin');
var replace         = require('gulp-replace');
var inlinesource    = require('gulp-inline-source');
var stripDebug      = require('gulp-strip-debug');
var rename          = require('gulp-rename');
var moment          = require('moment');
var ghtmlSrc = require('gulp-html-src');
var zip           = require('gulp-zip');




function getImagePaths(projectName, cb){
    
    var images = []
    const imageStream = gulp.src('./dev/'+projectName+'/index.html')
        .pipe(
            ghtmlSrc({                 
                selector: 'img', 
                includeHtmlInOutput: false,
                getFileName:function(node){
                    var url = node.attr("src")
                    console.log("++++++++");
                    console.log(url);
                    console.log("++++++++");
                    url = url.replace("../_common", "dev/_common")
                    cb(url)
                    // images.push(url)                    
                    return url;
                }
            })
        )
}


function log_free(projectName){  
    const splited = projectName.split("_")
    
    
    const size = splited[4]
    

    var images = ["./dev/_common/images/"+size+"/backup-image.jpg"]
    getImagePaths(projectName, function(url){
        images.push(url)
    })
    

    var entry = './dev/'+projectName+'/index.html';
    var stream =  gulp.src(entry)
        // .pipe(replace("main.js", 'log-free.js'))
        .pipe(htmlmin({removeComments:true, collapseWhitespace:true, preserveLineBreaks:true}))
        .pipe(inlinesource({compress:true, svgAsImage:true}))
        .on('error', notify.onError({message:"<%= error.message %>", wait: false}))               
        .pipe(replace('data:image/svg+xml;utf8', 'data:image/svg+xml;charset=utf-8'))
        .pipe(replace('<script type="text/javascript" src="http://localhost:48626/takana.js"></script>', ''))
        .pipe(replace("takanaClient.run({host: 'localhost:48626'});", ''))
        .pipe(replace("../_common/images/"+size+"/", ''))
        .pipe(replace("<title>", '<title>Created: '+moment().format('MMM D, h:mm')))
        .on("end", function(){
            for(var i=0;i<images.length;i++){            
               gulp.src(images[i]).pipe(gulp.dest('./docs/deploy/'+projectName))
               
            }
        })
        .pipe(gulp.dest('./docs/deploy/'+projectName));        

        return stream;   

}

module.exports = log_free;

