export const sendBookData = (books) => {
  const id = '1ixeASo4AU3X3cZnoiCd';
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        // `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`,
        'https://react-http-project-35727-default-rtdb.firebaseio.com/books.json',
        {
          method: 'POST',
          body: JSON.stringify(books),
        }
      );
      if (!response.ok) {
        throw new Error('Sending Book data failed');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.error(error);
    }
  };
};
