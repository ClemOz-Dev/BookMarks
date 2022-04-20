class BookMarkService {
  
  async fetchData(body: string) {
    const response = await fetch(`https://noembed.com/embed?url=${body}`,{
      method: 'GET',
      headers: {'Content-Type': 'application/json'},  
    })
    if(response.status === 200) {
      return await response.json()
    } else {
      console.log('Request error');
    }
    
  }
}

export default new BookMarkService();
