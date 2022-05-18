const { exec } = require('ffmpeg.js')

const convert = (url) => {
    const gif = exec(`ffmpeg -i ${url} -qscale 0 output.gif`);
    return gif; 
}

export const urlCheckConvert = (url) => {
    if(url.endsWith('.mp4')){
        return convert(url);
    } else {
        return url;
    }
}