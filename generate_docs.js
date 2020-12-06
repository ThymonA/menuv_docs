const docma = require('docma');
const docma_config = {
    src: [
        './docs/**/*.md'
    ],
    dest: './output/docs'
};

docma.create()
    .build('./docma_config.json')
    .catch(error => {
        console.log(error);
    })