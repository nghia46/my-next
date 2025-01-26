export async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
