import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type DataType = {
  puppies: {
    id: string;
    name: string;
    breed: string;
    dob: string;
  }[];
  singlePuppy: {
    id: string;
    name: string;
    breed: string;
    dob: string;
  }[];
};

export default function DeleteFavButton({ singlePuppy } : DataType) {
  const puppyId = singlePuppy[0].id;
  const [arr, setArr] = useState<any>([]);
  const navigate = useNavigate();

  const deletePuppy = (id: string) => {
    const url = `http://localhost:8080/api/puppies/${id}`;
    fetch(
      url,
      {
        method: 'Delete',
        mode: 'cors',
      },
    );
    window.location.reload();
  };

  const updatePuppy = (single:any) => {
    console.log(single);
    window.localStorage.setItem('toUpdate', JSON.stringify(single[0]));
    navigate('/update');
  };

  const favoritePuppy = (single: any[]) => {
    setArr((array: any) => [...array, single[0]]);
  };

  useEffect(() => {
    localStorage.setItem(`favPuppy${Math.random()}`, JSON.stringify(arr));
  }, [arr]);

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deletePuppy(puppyId)}>
        Delete
      </Button>
      <Button variant="contained" startIcon={<UpdateIcon />} onClick={() => updatePuppy(singlePuppy)} >
        Update
      </Button>
      <Button variant="contained" startIcon={<FavoriteIcon />} onClick={() => favoritePuppy(singlePuppy)}>
        Favorite
      </Button>
    </Stack>
  );
}
