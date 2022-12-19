export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '412b70108emshc856a800c5b1be9p1baf16jsnee2aed0f8d32',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const responce = await fetch(url, options);
  const data = await responce.json();

  return data;
}