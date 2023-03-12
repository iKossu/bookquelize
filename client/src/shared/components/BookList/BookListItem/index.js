import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const BookListItem = ({ book }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={book.name}
          secondary={
            <>
              {book.author} ({book.timestamp})
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default BookListItem;
