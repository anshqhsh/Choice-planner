import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

//네트워크 통신을 위한 dependency를 외부에서 받아와야한다 youtube라는 Props로 받아옴

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []); //[]를 두번째 인자로 주면 컴포넌트가 업데이트될때마다 이 함수를 부르지 않는다.

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}
export default App;
