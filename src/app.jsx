import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCBEUjm2QcPES2RFP7QENoKsmI8kbkA4Oo',
      requestOptions
    )
      .then(response => response.json()) //fetch(json)가 정상적으로 받아지면 반응을 텍스트로 변환하고
      .then(result => setVideos(result.items)) //비디오를 받아와서 컴포넌트에 데이터를 업데이트
      .catch(error => console.log('error', error));
  }, []); //[]를 두번째 인자로 주면 컴포넌트가 업데이트될때마다 이 함수를 부르지 않는다.

  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />;
    </div>
  );
}
export default App;
