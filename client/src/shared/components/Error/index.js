import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';

const Error = ({ error }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (error) {
      const { message, response: res } = error;
      setMessage(res
        ? res.data
          ? `${res.data.message}: ${Object.values(res.data.errors ?? [])
            .map(({ msg }) => msg).join(', ')}`
          : message
        : message);
    } else {
      setMessage(null);
    }
  }, [error]);

  return (
    <>
      {message && <Alert severity="error">{message}</Alert>}
    </>
  );
};

export default Error;
