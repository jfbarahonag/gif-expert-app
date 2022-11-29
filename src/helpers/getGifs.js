export const getGifs = async (category) => {
  const apiKey = 'wbE7dGkLQuaXYhqppeTk5NdI4scqDjHm';
  const limit = 20;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url
  }));
  console.log(gifs)
  return gifs;
}