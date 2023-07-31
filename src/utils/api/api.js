export const mainUrl = 'https://norma.nomoreparties.space/api/';
export const endPointOrder = 'orders';
export const endPointIngredients = 'ingredients';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const makeFetchOptions = (method, headers, body) => {
  const options = {
    method: !!method ? method : 'GET',
    headers
  };
  if (body) {
    options.body = JSON.stringify(body)
  }
  return options;
}

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
  .then(err => {
    console.log(err)
    err.httpCode = res.status;
    return Promise.reject(err);
  })
}

export const fetchIngredients = () => {
  return fetch(mainUrl + endPointIngredients)
  .then(checkResponse);
}

export const postOrder = (ids) => {
  const body = {"ingredients": ids };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointOrder, options)
  .then(checkResponse);
}
