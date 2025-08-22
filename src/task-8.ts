import axios from "axios";

interface GetFetchPosts {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts() {
  const response = await axios.get<GetFetchPosts[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

(async () => {
  const result = await fetchPosts();
  console.log(result);
})();
