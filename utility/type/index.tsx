export interface iPosts {
  id: number,
  userId: number,
  title: string,
  body: string
}
export interface iComments {
  id: number,
  postId?: number,
  name: string,
  email: number,
  body: string
}
export interface iUsers {
  id: number,
  name?: string,
  username?: string,
  email?: string,
  address?: string,
  phone?: string,
  website?: string,
  company?: string,
}
export interface iAllData {
  id: number,
  username: string,
  email: string,
  post_title: string,
  post_body: string
  comments: string
}

export interface iAllData2 {
  posts:[iPosts],
  users:[iUsers],
  comments:[iComments]

}