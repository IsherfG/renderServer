{
    filter: 'overlay',
    options: {
        enable: 'between(t,3,4)',
        x: 200,
        y: 510,
    },
    inputs: '[overlay1][1:v]',
    outputs: 'overlay2'
},
{
    filter: 'overlay',
    options: {
        enable: 'between(t,5,6)',
        x: 230,
        y: 510,
    },
    inputs: '[overlay2][1:v]',
    outputs: 'overlay3'
},
{
    filter: 'overlay',
    options: {
        enable: 'between(t,6,7)',
        x: 250,
        y: 490,
    },
    inputs: '[overlay3][1:v]',
    outputs: 'overlay4'
},
{
    filter: 'overlay',
    options: {
        enable: 'between(t,8,14)',
        x: 400,
        y: 490,
    },
    inputs: '[overlay4][1:v]',
    outputs: 'overlay5'
}


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
        x: "15+t*43",
        y: 430,
    },
    inputs: '[0:v][resized]',
    outputs: 'overlay1'
},