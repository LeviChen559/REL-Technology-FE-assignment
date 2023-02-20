// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


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
      const statusText: string = await res.text()
      throw new Error(`HTTP error!: ${res.status} ${statusText}`);
    }
    return data
  } catch (err: any) {
    console.log(err.message);
  }
};
