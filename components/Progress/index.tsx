import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        let diff:number=5
        for (let i=0;i<5;i++){
            diff*3
        }

        // const diff = Math.random() * 30;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '50%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}