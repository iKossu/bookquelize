import { useCallback, useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { observer } from 'mobx-react-lite';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { StoreContext } from 'shared/stores/StoreContext';
import BookListItem from 'shared/components/BookList/BookListItem';
import Error from 'shared/components/Error';
import * as Api from 'shared/utils/api';

const BookList = observer(() => {
  const store = useContext(StoreContext);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const postBook = async (values) => {
    try {
      const { book } = await Api.postRequest('books', values);
      store.setBooks([book]);
    } catch (error) {
      setError(error);
    }
  };
  const getBooks = useCallback(async () => {
    try {
      const { bookCount = 0, books = [] } = await Api.getRequest(
        `books/latest?limit=${20}&offset=${store.books.length}`
      );
      store.setBookCount(bookCount);
      store.setBooks(books);
      if (bookCount === 0 || bookCount <= books.length) {
        setHasMore(false);
      }
    } catch (error) {
      setError(error);
    }
  }, [store]);

  useEffect(() => {
    setError(null);
    getBooks();
  }, [store, getBooks]);

  return (
    <>
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <Error error={error} />
          <Fab color="primary" aria-label="add" onClick={handleOpen}>
            <AddIcon />
          </Fab>
          <List>
            <InfiniteScroll
              dataLength={store.books.length}
              next={getBooks}
              hasMore={hasMore}
              loader={<CircularProgress />}
              endMessage={
                <ListItem alignItems="flex-start">
                  <ListItemText primary="All books loaded." />
                </ListItem>
              }
            >
              {store.books.map((book, i) => (
                <BookListItem key={i} book={book} />))}
            </InfiniteScroll>
          </List>
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Formik
            initialValues={{
              name: '',
              author: '',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await postBook(values);
              setSubmitting(false);
              handleClose();
            }}
          >
            {({ values, submitForm, resetForm, isSubmitting, touched, errors }) => (
              <Form>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    type="text"
                    name="name"
                    label="Name"
                    helperText="Please enter a name"
                  />
                </Box>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    type="text"
                    name="author"
                    label="Author"
                  />
                </Box>
                <Box margin={1}>
                  <Button
                    sx={{ margin: 1 }}
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                  <Button
                    sx={{ margin: 1 }}
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                    onClick={resetForm}
                  >
                    Reset
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
});

export default BookList;
