import React, { useEffect, useState } from 'react';
import Fullpanel from './Fullpanel';
import mountain from '../img/mountain.svg'
import Skeleton from './Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDungeons, searchDungeons, loadMoreDungeons, clearError } from '../redux/slice/PanelSlise';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [showMore, setShowMore] = useState(true);
  const dispatch = useDispatch();
  const { items, error, loading, status  } = useSelector((state) => state.cart);
  const skeletons = [...new Array(1)].map((_, index) => <Skeleton key={index} />); // Измените количество скелетонов при необходимости
  
  useEffect(() => {
    try {
      dispatch(fetchDungeons(3));
    } catch (error) {}
  }, [dispatch]);

  async function onClickSearch() {
    try {
      dispatch(clearError());
      dispatch(searchDungeons(searchValue));
    } catch (error) {}
  }

  const onClickMore = () => {
    dispatch(loadMoreDungeons(8));
    setShowMore(false);
  };

  return (
    <div className='app'>
      <div className='mainBlock'>
        <div className='header-ponel'>
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className='input'
            placeholder='Поиск...'
            type='text'
          />
          <button onClick={onClickSearch}>найти</button>
        </div>
        <div className='block_dangens'>
          {error ? 
            <div className='eror'>
              <img src={mountain} alt="" />
              <h1>К сожалению такого подземелья нет</h1>
            </div> 
          : ''}
          {status === 'loading' ? 
            skeletons 
          : items.map((obj, i) => (
            <Fullpanel key={i} {...obj} />
          ))}
          {showMore && !error && !loading && (
            <button onClick={onClickMore} className='ShowMore'>
              <h1>Показать больше</h1>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
