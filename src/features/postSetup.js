import { redditAPI } from "../redditapi";
// import { urlCheckConvert } from "./gifConvert";

export const urlSet = (content) => {
    if(content.data.url.endsWith('jpg') 
        || content.data.url.endsWith('gif') 
        || content.data.url.endsWith('jpeg')
        ||content.data.url.endsWith('png')){
        return content.data.url;
    } else if (content.data.preview) {
        if(content.data.preview.reddit_video_preview){
            return content.data.preview.reddit_video_preview.fallback_url;
        } else {
            return "undefined"
        }
    } else {
        return "undefined"
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
    let jsonDataArray;
    try{
        jsonDataArray = json.data.children.map(content => 
            ({
            id: content.data.id,
            author: content.data.author,
            title: content.data.title,
            url: urlSet(content)
            })
        )
    }catch(error){
        console.log(error)
    }

    const dataFiltered = jsonDataArray.filter(object => urlCheck(object));
    // console.log(dataFiltered);
    return dataFiltered;

    // try{
    //     let postsTenArray = []
    //     let p = 0
    //     while(p < dataFiltered.length / 10){
    //         let num = p * 10;
    //         let tenCardArray = []
    //         for(let i = num; i < num + 10; i++){
    //             try{
    //                 if(urlCheck(dataFiltered[i])){
    //                     tenCardArray.push(dataFiltered[i]);
    //                 }
    //             } catch(error) {
    //                 console.log(error + i)
    //                 break;
    //             }
    //             // console.log(i);
    //             // console.log(tenCardArray)
    //         }
    //         if(tenCardArray.length != 0){
    //             postsTenArray.push(tenCardArray);
    //         }
    //         p++
    //     }
    //     // console.log(postsTenArray);
    //     if(postsTenArray.length != 0){
    //         return postsTenArray;
    //     } else {
    //         return [[{
    //             id: 1,
    //             author: 'your mom',
    //             title: 'Nothing Found',
    //             url: '../../features/sad-face.gif'
    //         }]]
    //     }
    // }catch(error){
    //     console.log(error)
    // }
    
}