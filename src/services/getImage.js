const getImage = (url) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export { getImage };