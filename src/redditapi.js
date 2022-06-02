
export const redditAPI = async (query) => {
    if(!query){
        return null
    }
    try{
        const response = await fetch(`https://www.reddit.com${query}.json?limit=100`, {})
        return response;   
    } catch (error) {
        // console.log(error);
        return {error: error}
    }
}


