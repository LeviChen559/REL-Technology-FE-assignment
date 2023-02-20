import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { loadDataApi } from '@/pages/api/loadData';
import {iPosts, iUsers,iComments} from "../../utility/type/index"
import { useFetch } from '../api/useFetch';

export default function CardDetail() {
    const router=useRouter()
    const {id} = router.query;
    const [posts, setPosts] = useState<iPosts>({id:0,userId:0,title:"",body:""})
    const [comments, setComments] = useState<iComments[]>([])
    const [users, setUsers] = useState<iUsers>({ 
      id: 0,name: "",username: "", email: "", address: "",phone: "", website: "",company: ""})

      if(id){
      const {isLoading,apiData,serverError}=useFetch(`${process.env.NEXT_PUBLIC_API}/posts?id=${id}`)
      console.log("apiData",apiData)
      setPosts(apiData)
    
      }
    

    useEffect(()=>{
        if(id){
          const getCardDetail= async()=>{
            const postsData = await loadDataApi(`${process.env.NEXT_PUBLIC_API}/posts?id=${id}`)
            const commentsData = await loadDataApi(`${process.env.NEXT_PUBLIC_API}/comments?postId=${id}`)
            const usersData = await loadDataApi(`${process.env.NEXT_PUBLIC_API}/users`);
            setPosts(postsData[0])
            setComments(commentsData)
            let selectUserData = usersData.filter((user: iUsers) => user.id == postsData[0].userId);
            setUsers(selectUserData[0])
        }
        getCardDetail()
    }
},[id])
if (posts===null){
    return <div> 404 Can not find the book. </div>
}


  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        {posts.id}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        {users.username} |    {users.email}
        </Typography>
        <Typography variant="h5" component="div">
        {posts.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {posts.body}
        </Typography>
        {comments.map(comment=>{  
          return  <Box key={comment.id} sx={{margin:2}}>
        <Typography variant="body1" sx={{fontWeight:700}}> 
          {comment.name}
        </Typography>
        <Typography variant="body2">
          {comment.body}
        </Typography>
            
            </Box>
        })
        }
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button size="small" onClick={()=>router.push("/page2")} >Go back</Button>
      </CardActions>
    </Card>
  );
}