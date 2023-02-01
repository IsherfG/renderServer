    const express = require('express');
    const fs = require('fs');
    const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
    const ffmpeg = require('fluent-ffmpeg');
    const app = express();
    const multer = require('multer');
    const path = require("path");
    ffmpeg.setFfmpegPath(ffmpegPath);
    var cors = require('cors')

    app.use(cors())

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'images')
        },
        filename: function (req, file, cb) {
            console.log(file);
            cb(null, Date.now() + path.extname(file.originalname))
        }
    })
    const upload = multer({ storage: storage });


    app.get('/', (req, res) => {
        res.send("Hello from Express!");
    });

    app.get('/testing', (req, res) => {
        const backgroundVideo = './backgroundnew.mp4';
        const audio = './audio.mp3'
        const overlayImage1 = './test1.png';
        const overlayImage2 = './test2.png';
        //console.log(req.files[0].path);
      //  console.log(req.files[1].path);
        console.log(audio)


        ffmpeg()
        .input(backgroundVideo)
        .input(overlayImage1)
        .input(overlayImage2)
        .input(audio)
        .complexFilter([
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,1.7,5)',
                    x: "50+t*43",
                    y: 430,
                },
                inputs: '[0:v][resized]',
                outputs: 'overlay1'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized2'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,5,6.2)',
                    x: "15+t*50",
                    y: 430,
                },
                inputs: '[overlay1][resized2]',
                outputs: 'overlay2'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized3'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,6.2,7.9)',
                    x: 412,
                    y: 430,
                },
                inputs: '[overlay2][resized3]',
                outputs: 'overlay3'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized4'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,8,14.7)',
                    x: 470,
                    y: 430,
                },
                inputs: '[overlay3][resized4]',
                outputs: 'overlay4'
            },
            {
                filter: 'scale',
                options: {
                    w:235,
                    h:235
                },
                inputs: '[1:v]',
                outputs: 'resized5'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,17.4,18.7)',
                    x: 780,
                    y: 845,
                },
                inputs: '[overlay4][resized5]',
                outputs: 'overlay5'
            },
            {
                filter: 'scale',
                options: {
                    w:250,
                    h:250
                },
                inputs: '[1:v]',
                outputs: 'resized6'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,18.7,19.4)',
                    x: 790,
                    y: 810,
                },
                inputs: '[overlay5][resized6]',
                outputs: 'overlay6'
            },
            {
                filter: 'scale',
                options: {
                    w:270,
                    h:270
                },
                inputs: '[1:v]',
                outputs: 'resized7'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,19.4,20.6)',
                    x: 800,
                    y: 750,
                },
                inputs: '[overlay6][resized7]',
                outputs: 'overlay7'
            },
            {
                filter: 'scale',
                options: {
                    w:280,
                    h:280
                },
                inputs: '[1:v]',
                outputs: 'resized8'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,20.6,22)',
                    x: 810,
                    y: 720,
                },
                inputs: '[overlay7][resized8]',
                outputs: 'overlay8'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized9'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,22.05,30)',
                    x: 435,
                    y: 470,
                },
                inputs: '[overlay8][resized9]',
                outputs: 'overlay9'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,1.7,5)',
                    x: "1120-t*60",
                    y: 510,
                },
                inputs: '[overlay9][resized]',
                outputs: 'overlay10'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized2'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,5,6.2)',
                    x: "1150-t*67",
                    y: 510,
                },
                inputs: '[overlay10][resized2]',
                outputs: 'overlay11'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized3'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,6.2,7.9)',
                    x: 680,
                    y: 515,
                },
                inputs: '[overlay11][resized3]',
                outputs: 'overlay12'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized4'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,8,14.7)',
                    x: 655,
                    y: 590,
                },
                inputs: '[overlay12][resized4]',
                outputs: 'overlay13'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized9'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,22.05,30)',
                    x: 685,
                    y: 575,
                },
                inputs: '[overlay13][resized9]',
                outputs: 'overlay14'
            },
            {
                filter: 'scale',
                options: {
                    w:235,
                    h:235
                },
                inputs: '[2:v]',
                outputs: 'resized5'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,17.4,18.7)',
                    x: 365,
                    y: 900,
                },
                inputs: '[overlay14][resized5]',
                outputs: 'overlay15'
            },
            {
                filter: 'scale',
                options: {
                    w:250,
                    h:250
                },
                inputs: '[2:v]',
                outputs: 'resized6'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,18.7,19.4)',
                    x: 340,
                    y: 875,
                },
                inputs: '[overlay15][resized6]',
                outputs: 'overlay16'
            },
            {
                filter: 'scale',
                options: {
                    w:270,
                    h:270
                },
                inputs: '[2:v]',
                outputs: 'resized7'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,19.4,20.6)',
                    x: 300,
                    y: 820,
                },
                inputs: '[overlay16][resized7]',
                outputs: 'overlay17'
            },
            {
                filter: 'scale',
                options: {
                    w:280,
                    h:280
                },
                inputs: '[2:v]',
                outputs: 'resized8'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,20.6,22)',
                    x: 280,
                    y: 800,
                },
                inputs: '[overlay17][resized8]',
                outputs: 'overlay18'
            },
            
            
        ])
        .addOption('-i', audio)
        .addOption('-c:a', 'libmp3lame')
        .outputOptions([    '-c:v libx264',    '-b:v 1000k',    '-preset medium'])
        .map('[overlay18]')
        .on('error', (err) => {
            console.log(err);
            res.status(500).send({ error: 'Error while processing video' });
        })
        .on('end', () => {
            console.log('First render finished successfully!');
            merge('./output.mp4', audio , res)
        })
        .save('./output.mp4');
        
        function merge(video, audio,res) {
            ffmpeg()
                .addInput(video)
                .addInput(audio)
                .addOptions(['-map 0:v', '-map 1:a', '-c:v copy'])
                .format('mp4')
                .on('error', (err) => {
                    console.log(err);
                    res.status(500).send({ error: 'Error while processing video' });
                })
                .on('end', () => {
                    console.log('Merged successfully!');
                    res.download('./merged.mp4');
                    console.log(res.data);
                })
                .saveToFile('merged.mp4')
        } 
    });

    app.post('/upload', upload.single('image'), (req, res) => {
        // Do something with the image
        // ...
      
        // Delete the image after use
        fs.unlink(req.file.path, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.send('Image deleted');
        });
      });

    app.post('/video', upload.array('image',2), (req, res) => {
        
        const backgroundVideo = './backgroundnew.mp4';
        const audio = './audio.mp3'
        const overlayImage1 = req.files[0].path;
        const overlayImage2 = req.files[1].path;
        //console.log(req.files[0].path);
      //  console.log(req.files[1].path);
        console.log(audio)


        ffmpeg()
        .input(backgroundVideo)
        .input(overlayImage1)
        .input(overlayImage2)
        .input(audio)
        .complexFilter([
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,1.7,6.2)',
                    x: "-25+t*58",
                    y: 430,
                },
                inputs: '[0:v][resized]',
                outputs: 'overlay1'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized2'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,5,6.2)',
                    x: "15+t*50",
                    y: 20000,
                },
                inputs: '[overlay1][resized2]',
                outputs: 'overlay2'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized3'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,6.2,7.9)',
                    x: 450,
                    y: 430,
                },
                inputs: '[overlay2][resized3]',
                outputs: 'overlay3'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized4'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,8,14.7)',
                    x: 510,
                    y: 430,
                },
                inputs: '[overlay3][resized4]',
                outputs: 'overlay4'
            },
            {
                filter: 'scale',
                options: {
                    w:270,
                    h:270
                },
                inputs: '[1:v]',
                outputs: 'resized7'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,17.4,21.9)',
                    x: 820,
                    y: 715,
                },
                inputs: '[overlay4][resized7]',
                outputs: 'overlay7'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[1:v]',
                outputs: 'resized9'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,22.05,30)',
                    x: 450,
                    y: 460,
                },
                inputs: '[overlay7][resized9]',
                outputs: 'overlay9'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,1.7,6.2)',
                    x: "1135-t*65",
                    y: 495,
                },
                inputs: '[overlay9][resized]',
                outputs: 'overlay10'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized2'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,5,6.2)',
                    x: "1150-t*67",
                    y: 50000,
                },
                inputs: '[overlay10][resized2]',
                outputs: 'overlay11'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized3'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,6.2,7.9)',
                    x: 700,
                    y: 515,
                },
                inputs: '[overlay11][resized3]',
                outputs: 'overlay12'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized4'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,8,14.7)',
                    x: 655,
                    y: 580,
                },
                inputs: '[overlay12][resized4]',
                outputs: 'overlay13'
            },
            {
                filter: 'scale',
                options: {
                    w:300,
                    h:300
                },
                inputs: '[2:v]',
                outputs: 'resized9'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,22.05,30)',
                    x: 715,
                    y: 550,
                },
                inputs: '[overlay13][resized9]',
                outputs: 'overlay14'
            },
            {
                filter: 'scale',
                options: {
                    w:225,
                    h:225
                },
                inputs: '[2:v]',
                outputs: 'resized8'
            },
            {
                filter: 'overlay',
                options: {
                    enable: 'between(t,17.4,21.9)',
                    x: 340,
                    y: 810,
                },
                inputs: '[overlay14][resized8]',
                outputs: 'overlay18'
            },
            
            
        ])
        .addOption('-i', audio)
        .addOption('-c:a', 'libmp3lame')
        .outputOptions([    '-c:v libx264',    '-b:v 1000k',    '-preset medium'])
        .map('[overlay18]')
        .on('error', (err) => {
            console.log(err);
            res.status(500).send({ error: 'Error while processing video' });
        })
        .on('end', () => {
            console.log('First render finished successfully!');
            fs.unlink(req.files[0].path , (err) =>{
                if (err){
                    return res.status(500).send(err);
                }
            })
            fs.unlink(req.files[1].path , (err) =>{
                if (err){
                    return res.status(500).send(err);
                }
            })
            merge('./output.mp4', audio , res)
        })
        .save('./output.mp4');
        
        function merge(video, audio,res) {
            ffmpeg()
                .addInput(video)
                .addInput(audio)
                .addOptions(['-map 0:v', '-map 1:a', '-c:v copy'])
                .format('mp4')
                .on('error', (err) => {
                    console.log(err);
                    res.status(500).send({ error: 'Error while processing video' });
                })
                .on('end', () => {
                    console.log('Merged successfully!');
                    
                    res.download('./merged.mp4');
                    console.log(res.data);
                })
                .saveToFile('merged.mp4')


            
        }
    }); 
    
    app.listen(5000, () => {
        console.log('Server running on port 5000');
    });

