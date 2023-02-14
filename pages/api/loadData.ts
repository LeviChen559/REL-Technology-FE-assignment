// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



const option = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  },
}
export const loadDataApi = async (URL:string
  
  ) => {
  try {
    const res = await fetch(URL, option);
    const data = await res.json();
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    return data
  } catch (err: any) {
    console.log(err.message);
  }
};
