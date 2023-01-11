import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';

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

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deletePuppy(puppyId)}>
        Delete
      </Button>
      <Button variant="contained" startIcon={<UpdateIcon />}>
        Update
      </Button>
      <Button variant="contained" startIcon={<FavoriteIcon />}>
        Favorite
      </Button>
    </Stack>
  );
}
