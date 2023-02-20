export interface iPosts {
  id: number,
  userId: number,
  title: string,
  body: string
}
export interface iComments {
  map(arg0: (comment: iComments, index: number) => JSX.Element): import("react").ReactNode
  id?: number,
  postId?: number,
  name?: string,
  email?: string,
  body?: string
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
  username?: string| undefined,
  email?: string | undefined,
  post_title: string ,
  post_body: string ,
  comments?:iComments|undefined
 
}

export interface iAllData2 {
  posts:[iPosts],
  users:[iUsers],
  comments:[iComments]

}