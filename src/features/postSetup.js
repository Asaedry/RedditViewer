import { redditAPI } from "../redditapi";

export const urlSet = (content) => {
    if(content.data.url){
        if(content.data.url.endsWith('jpg') 
        || content.data.url.endsWith('gif') 
        || content.data.url.endsWith('jpeg')
        ||content.data.url.endsWith('png')){
            if(content.data.url.startsWith('https://i.redgifs.com/i')){
                return 'undefined'
            } else {    
                return content.data.url;
            }
        } else if (content.data.preview) {
            if(content.data.preview.reddit_video_preview){
                return content.data.preview.reddit_video_preview.fallback_url;
            } else {
                return "undefined"
            }
        } else {
            return "undefined"
        }
    } else {
        return 'undefined'
    }
}


export const urlCheck = (content) => {
    if(content.url.endsWith('.jpg')
        || content.url.endsWith('.gif')
        || content.url.endsWith('.jpeg')
        || content.url.endsWith('.png')
        || content.url.endsWith('.mp4')){
            return true;
    } else {
        return false;
    }
}

export const cardSetup = async (query) => {
    const data = await redditAPI(query);
    const json = await data.json();
    // console.log(json);
    if(json.error){
        return [{
            id: 1,
            author: 'your mom',
            title: 'Nothing Found',
            sub: ')',
            url: './sad-face.gif'
        }]
    }

    let jsonSimp = {data: {children: []}};
    if(json.length > 1){
        try {
            let childArray = []
            json.map(group => {
                group.data.children.map(child => {
                    childArray.push(child);
                })
            })
            jsonSimp.data.children = childArray;
        } catch(error) {
            console.log(error)
        }
        
    } else {
        jsonSimp = json
    }
    // console.log(jsonSimp);
    let jsonDataArray;
    try{
        jsonDataArray = jsonSimp.data.children.map(content => 
            ({
            id: content.data.id,
            author: content.data.author,
            title: content.data.title,
            sub: content.data.subreddit_name_prefixed,
            url: urlSet(content)
            })
        )
    }catch(error){
        console.log(error)
    }

    const dataFiltered = jsonDataArray.filter(object => urlCheck(object));
    // console.log(dataFiltered);

    if(dataFiltered.length > 0){
        return dataFiltered;
    } else {
        // console.log('nothing found')
        return [{
                    id: 1,
                    author: 'your mom',
                    title: 'Nothing Found',
                    sub: ')',
                    url: './sad-face.gif'
                }]
    }
}