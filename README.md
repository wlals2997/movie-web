#  :pushpin:  영화예매사이트
> React.js 로 만든 영화 소개 사이트입니다.
>👉🏼[웹페이지 링크](https://wlals2997.github.io/movie-web/)

## 1. 제작 기간 & 참여 인원
- 2022년 07월 18일~ 2022년 08월 09일
- 개인 프로젝트


## 2. skills/framework
#### `Front-end`
- react.js(18.2.0)
- react-router-dom(6.3.0)
- React-Redux
- styled-compoents(5.3.5)
#### `Back-end`
- firebase(v9)


## 3. 구현 목록
#### 회원가입 [:pushpin:코드확인](https://github.com/wlals2997/movie-web/blob/900926f94eb5581557387dcb8e28fae620bc7086/src/routes/Auth.js#L63)
파이어 베이스를 연동하여 메서드(singInWithEmailAndPassword)를 사용하여 회원가입을 하도록 하였습니다.
유저의 nickname, password, email을 firestore에 추가하도록 구현하였습니다.
그리고 firestored에 추가된 data들을 불러와 profile에서 보여주도록 하였습니다.

#### 로그인, 로그아웃
 [:pushpin:로그인 코드확인](https://github.com/wlals2997/movie-web/blob/900926f94eb5581557387dcb8e28fae620bc7086/src/routes/Auth.js#L47)
~~~ react
useEffect(() => {
    //유저상태의 변화를 감지한다.
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          email: user.email,
          // updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true); //처음에는 false이나 user의 존재여부를 판명이 되고 true가 되면 해당 화면을 render한다.
    });
  }, []);
~~~
 firebase.auth를 이용해서 로그인 부분을 구현하였습니다.

email과 password변수가 바뀔 때마다 동작하는 onChange 함수를 만들고 form의 onSubmit함수를 생성하였습니다.

유저 상태의 변화를 감지하게 되면 onAuthStateChanged 메서드를 이용하여 IsLoggedIn이라는 state를 true로 바꿔주고 user가 로그인되어 있으면 현재 유저 정보를 반환합니다.
그리고 isLoggedIn  state를 라우터에 prop으로 전달합니다. isLoggedIn state를 통해서 navbar, 예매 ui화면이 달라집니다.

 [:pushpin:로그아웃 코드확인](https://github.com/wlals2997/movie-web/blob/900926f94eb5581557387dcb8e28fae620bc7086/src/routes/Profile.js#L51)
 로그아웃은 auth.signOut() 메서드를 통해서 로그아웃이 가능합니다.
로그아웃된 화면은 useNavigate함수를 사용하여 메인화면으로 돌아가도록 구현하였습니다.

#### 영화 예매 [:pushpin:코드확인](https://github.com/wlals2997/movie-web/blob/900926f94eb5581557387dcb8e28fae620bc7086/src/routes/Detail.js#L35)
useParams() 함수를 이용하여 클릭한 영화의 id에 맞는 페이지로 이동할 수 있도록 하였습니다. 영화 상영시간과 영화관은 Data를 만들어 불러왔습니다.
예매 버튼은 토글 버튼으로 구현하였고 user가 예매할 영화와 시간, 관을 선택하고 예매 버튼을 누르면 firestore에 book이라는 document가 생성하게 됩니다.
그리고 /book으로 이동하게 됩니다.


#### 예매취소 [:pushpin:코드확인](https://github.com/wlals2997/movie-web/blob/900926f94eb5581557387dcb8e28fae620bc7086/src/routes/BookSection.js#L40)
/book 화면에는 book document를 불러와 data들을 예매한 영화를 보일 수 있게 하였습니다. 
예매 취소는 book document를 삭제할 수 있도록 하였습니다. 그러면 firestore에는 실시간으로 사라지게 되고 다시 /book화면으로 이동하게 되면 사라진 화면을 볼 수 있습니다.

#### 영화 API 연결 [:pushpin:코드확인](https://github.com/wlals2997/movie-web/blob/900926f94eb5581557387dcb8e28fae620bc7086/src/routes/MovieSection.js#L22)
YTS에서 제공하는 영화 api를 async await을 이용하여 api를 연결합니다.
영화 데이터를 저장한 movies배열을 이용해 map으로 렌더링 합니다.

#### 영화 카테고리 fillter목록 
~~~ react
  const [filterItem, setFilterItem] = useState('');

   <Fillter
            movies={movies}
            setFilterItem={setFilterItem}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
~~~
MovieSection.js에 fillterItem. state를 만들고 자식 컴포넌트에서 setFireItem을 사용해야 하기 때문에 props로 전달해주었습니다.

<details>
<summary><b>Fillter 컴포넌트(클릭)</b></summary>
<div markdown="1">

~~~react
//장르필터
const Fillter = ({ setActiveGenre, activeGenre, setFilterItem, movies }) => {
  const onClick = (e) => {
    setFilterItem(e.target.innerText);
  };
  return (
    <Btn.FillterContainer>
      <Btn.FillterBtn onClick={onClick}>Drama</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Comedy</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Romance</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Horror</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Documentary</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Action</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>History</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>War</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Crime</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Mystery</Btn.FillterBtn>
    </Btn.FillterContainer>
  );
};
export default Fillter;
~~~

</div>
</details>
</br>

~~~react
 {filterItem === ''
                ? movies.map((movie) => (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      medium_cover_image={movie.medium_cover_image}
                      title={movie.title}
                      onClick={onClick}
                    />
                  ))
                : movies.map((movie) =>
                    movie.genres.includes(filterItem) ? (
                      <Movie
                        key={movie.id}
                        id={movie.id}
                        medium_cover_image={movie.medium_cover_image}
                        title={movie.title}
                        onClick={onClick}
                      />
                    ) : null
                  )}
~~~
그리고 map을 활용하여 genre에서 fillterItem과 동일한 요소가 있다면 Movie컴포넌트를 불러 영화를 불러오게 하였습니다.

#### framer-motion라이브러리 [:pushpin:코드확인](https://github.com/wlals2997/movie-web/blob/900926f94eb5581557387dcb8e28fae620bc7086/src/routes/MovieSection.js#L49)
~~~ react
//motion & gesture 라이브러리
import { motion,AnimatePresence } from 'framer-motion';
~~~
~~~ react
//Movie 컴포넌트
 <motion.div
      key={id}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration:1}}
    >
~~~
YTS에서 제공하는 영화 api를 async await을 이용하여 api를 연결합니다.
영화 데이터를 저장한 movies배열을 이용해 map으로 렌더링 합니다.
## 4.트러블 슈팅
프로젝트를 gh-pages로 배포하고 나서 링크에 문제가 생기게 되었습니다. 그 이유는  BrowserRouter를 사용하게 되면 issue들이 발생하기 때문입니다. 오류를 해결하고자 여러 방법들을 찾아보았는데

첫 번째 HashRouter를 사용해보았습니다.

HashRouter를 사용했을 때 메인화면은 정상적으로 돌아가지만 링크에 # 이 붙어 예매사이트로 갈 때나 회원가입할 때 원활하게 동작하지 않았습니다.

두 번째는 BrowserRouter에 basename을 추가하였습니다.

~~~react
<BrowserRouter basename='/movie-web'>
~~~
두 번째 방법으로 했을 때는 링크에 #이 생기지 않고 메인화면과 예매 화면 로그인 화면이 정상적으로 랜더링 되었습니다.

하지만 유저가 로그인을 하고 다시 메인화면으로 돌아가는 부분과 영화를 선택하고 바로 예매 화면을 보여주어야 하는데 이 부분에서 링크가 제대로 랜더링 되지 않았습니다. 

그래서 여러 해결방법들을 찾아보다가 개발자 커뮤니티 사이트에 질문들을 올렸습니다.

그중 해결한 방법이 
~~~react
 //예매취소 버튼을 누른후 movie페이지로 이동
document.location.href = '/movie';
~~~
을 작성했던 부분을 useNavigate 훅으로 변경하는 방법입니다.
위와 같이 작성하게 되면 basename을 무시하고 root기준에서 /movie로 가기 때문입니다.
이 방법으로 document.location,href를 작성한 부분을 useNavigate로 변경해주는 정상적으로 화면이 렌더링 되었습니다.
## 5. 회고 / 느낀점
  예전에 만든 movie-web은 단순히 영화 정보들만 보여준 웹이었다면 이번에는 회원가입과 로그인이 가능하고 영화 예매까지 가능한 사이트를 만들어보고 싶었습니다.
회원가입, 로그인 구현이나 css부분으로도 많은 공부를 할 수 있었고 저 스스로도 업그레이드된 시간이었습니다.
다음 프로젝트에는 spotify와 같이 유저의 영화 취향을 서로 공유할 수 있는 사이트도 만들어볼 예정입니다.