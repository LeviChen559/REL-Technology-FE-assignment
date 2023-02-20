import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
export default function TogglePageButton() {
  const [alignment, setAlignment] = React.useState('web');
  const router=useRouter() 
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant={router.pathname=="/page2"?"outlined":"contained"}  onClick={()=>router.push("/")}>Page 1</Button>
      <Button variant={router.pathname=="/"?"outlined":"contained"} onClick={()=>router.push("/page2")} >Page 2</Button>
     
    </Stack>
  );
}