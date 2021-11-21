import React from 'react';
import './utils.scss';
import './App.scss';
import block from 'bem-cn-lite';
import cn from 'classnames'
import 'normalize.css'
import {useBlogData} from "./hooks/use-blog-data";
import {Card} from "./components/Card/Card";
import {Footer} from "./components/Footer/Footer";

const b = block(`App${process.env.REACT_APP_LAYOUT_MODE === 'grid' ? 'Grid': 'Flex'}`);

function App() {
  const blogData = useBlogData();
  return (
    <div className={b('Container')}>
      <header className={b('Header')}>
        <div className={b('Logo')}>NewsExplorer</div>
          <i className={cn("fas fa-bars", b('Burger'))}/>
        <nav className={b('LinksList')}>
            <ul>
                <li><a className={b('Link')} href="#">Главная</a> </li>
                <li><a className={cn(b('Link'),b('Link', {active: true}))} href="#">Сохраненные статьи</a> </li>
                <li><a className={cn(b('Link'),b('Link', {logout: true}))} href="#">Грета <i className="fas fa-sign-out-alt"></i></a> </li>
            </ul>
        </nav>
      </header>
      <div className={b('HeaderContent')}>
          <div className={b('HeaderContentTitle')}>Сохранённые статьи</div>
          <div className={b('HeaderContentMessage')}>Грета, у вас 5 сохранённых статей</div>
          <div className={b('HeaderContentDescription')}>По ключевым словам: <b>Природа</b>, <b>Тайга</b> и <b>2-м другим</b></div>
      </div>
      <main className={b('MainContent')}>
          {blogData.map(({title, type, date, content, media, imgSrc}, idx) => <Card key={idx} title={title} type={type} content={content} date={date} media={media} imgSrc={imgSrc} />)}
      </main>
        <Footer />
    </div>
  );
}

export default App;
