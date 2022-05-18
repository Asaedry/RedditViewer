import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteScroll } from "../../features/infiniteScroll";
import { selectSearch } from "../search/searchSlice";
import { PostListSection } from "./postListSection";
import { PostCard } from "../postCard/postCard";
import { isLoadingPosts, loadPostsforCards, selectPosts } from "./postListSlice";

export const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postsAreLoading = useSelector(isLoadingPosts);
    const query = useSelector(selectSearch);
    const [postList, setPostList] = useState([{
        id: 1,
        author: 'your mom',
        title: 'Nothing Found',
        url: '../../features/sad-face.gif'
    }])


    useEffect(() => {
        if(posts){
            setPostList(posts.slice(0, 9))
        }
    }, [posts])

    useEffect(() => {
        dispatch(loadPostsforCards(query));
    }, [dispatch, query])

    const fetchMoreListItems = () => {
        setPostList(prevState => ([...prevState, ...posts.slice(prevState.length, prevState.length + 10)]));
        setIsFetching(false);
        console.log('fetching more')
    }
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
      }, [isFetching]);
    
      function handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight && !isFetching){
            console.log('fetching')
            setIsFetching(true);
        }
      }

    if(postsAreLoading){
        // console.log(query)
        return <h2 id="cardSection" >Loading Content</h2>;

    }
    
    if(posts) {   
        return (
        <div id="cardSection" >
            {postList.map(post =>
                <PostCard 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    imgsrc={post.url}
                    author={post.author}
                />
            )}
            {isFetching && <p>Fetching more results...</p>}
        </div>
        )

    }
}