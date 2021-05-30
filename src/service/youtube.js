class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  //mostpopular를 호출하면 네트워크 통신해서 받아온 데이터를 아이템즈로 호출해서 받아옴
  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items; //비디오를 받아와서 컴포넌트에 데이터를 업데이트
  }
  //프로미스를 리턴 items를 변환해서 리턴
  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
