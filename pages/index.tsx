import Head from 'next/head'
import { useEffect, useState, useRef, useCallback, useMemo, } from 'react'
import { iPosts, iComments, iAllData, iUsers } from '../utility/type'
import { BasicCards } from '@/components/BasicCards'
import { Container } from '@mui/material';
import { loadDataApi } from '@/pages/api/loadData';
import TogglePageButton from "@/components/nav"
import ProgressBar from '@/components/Progress';

export default function Home() {
  const start: number = 0;
  const end: number = 20;
  const [posts, setPosts] = useState<iPosts[]>([])
  const [comments, setComments] = useState<iComments[]>([])
  const [users, setUsers] = useState<iUsers[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [startNum, setStartNum] = useState<number>(start);
  const [endNum, setEndNum] = useState<number>(end);


  const loadPostData = async () => {
    const postsData = await loadDataApi(`${process.env.NEXT_PUBLIC_API}/posts`)
    setLoading(true)
    setPosts(postsData.slice(0, endNum))
    if(posts.length === 100){
      setLoading(false)}
  }
  const loadOtherData = async () => {
    const commentsData = await loadDataApi(`${process.env.NEXT_PUBLIC_API}/comments`)
    const usersData = await loadDataApi(`${process.env.NEXT_PUBLIC_API}/users`);
    setLoading(true)
    setComments(commentsData)
    setUsers(usersData)
    console.log("load detail")
  }


  useEffect(() => {
    loadPostData()
    console.log(posts)

  }, [startNum, endNum]);


  const observer = useRef<IntersectionObserver | null>(null);
  const lastBookElementRef = useCallback((node: any) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoading(false)
        setTimeout(() => {
          setStartNum(prevPageNumber => prevPageNumber + 20)
          setEndNum(prevPageNumber => prevPageNumber + 20)

        }, 500)
        setLoading(true)
      }
    })
    if (node) observer.current.observe(node)
  }, [])


  const newPostsFormat = useMemo(() => posts.map((post: iPosts) => {
    let selectUserData = users.filter((user: iUsers) => user.id == post.userId);
    let selectUserName = selectUserData.map((user: iUsers) => user.username).join();
    let selectUserEmail = selectUserData.map((user: iUsers) => user.email).join();
    let selectCommentData = comments.filter((comment: iComments) => comment.postId == post.id);
    let selectComments = selectCommentData.map((comment: iComments) => comment.body).join();
    return {
      id: post.id,
      username: selectUserName,
      email: selectUserEmail,
      post_title: post.title,
      post_body: post.body,
      comments: selectComments
    };
  }), [posts, users, comments]);


  return (
    <Container sx={{ paddingTop: 5, addingLeft: 100, paddingRight: 100 }}>
      <Head>
        <title>Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
      >
        <TogglePageButton />
        <p> {!loading && 'Loading...'}</p>
        <BasicCards cardList={newPostsFormat} lastBookElementRef={lastBookElementRef} onClick={loadOtherData} />
        <div style={{ display:"flex",justifyContent:"center", marginBottom: 25 }}>  {loading && <ProgressBar />}</div>
        <p style={{ textAlign: "center", marginBottom: 25 }}> {!loading && 'End of Posts.'}</p>
      </div>
    </Container>
  )
}
