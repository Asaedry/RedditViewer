
export const redditAPI = async (query) => {
    try{
        const response = await fetch(`https://www.reddit.com/${query}.json?limit=100`, {})
        // const jsonResponse = response.json();
        // console.log(jsonResponse);
        // return jsonResponse;
        return response;   
    } catch (error) {
        console.log(error);
        return {
            data: {
                children: {
                    data: {
                        id: null,
                        author: null,
                        title: null, 
                        url: null
                    }
                }
            }
        }
    }
}


// redditAPI();

