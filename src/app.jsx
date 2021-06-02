import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import BoardConent from './components/board-content/boad-content';
import HeaderMain from './components/header_main/header_main';

//네트워크 통신을 위한 dependency를 외부에서 받아와야한다 youtube라는 Props로 받아옴

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); //처음에는 null

  //비디오 선택 콜백함수
  const selectVideo = video => {
    setSelectedVideo(video);
  };
  //검색시 리스트로 돌아가기
  const search = query => {
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []); //[]를 두번째 인자로 주면 컴포넌트가 업데이트될때마다 이 함수를 부르지 않는다.

  return (
    <div className={styles.App}>
      <HeaderMain />
      <div className={styles.board}>
        <BoardConent />
      </div>
      <div className={styles.youtube}>
        <SearchHeader onSearch={search} />
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={'list'}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
