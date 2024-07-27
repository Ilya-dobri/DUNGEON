import axios, { spread } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import redStar from '../img/redStar.svg';
import whiteStar from '../img/whiteStar.svg';
function CartItem() {
  const [obj, setObj] = useState('');
  const star = [...new Array(5)];

  const { id } = useParams();
  useEffect(() => {
    const Cart = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/dungeons/${id}`);
        setObj(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    Cart();
  }, [id]);

  return (
    <div className='block'>
      <img src={obj.img} alt='' />
      <h1 className='title'>{obj.title}</h1>
      <div className='hard'>
        <h1>Сложность:</h1>
        <span>
          {star.map((_, index) => {
            return index < obj.difficulty ? (
              <img key={index} src={redStar} alt='' />
            ) : (
              <img key={index} src={whiteStar} alt='' />
            );
          })}
        </span>
      </div>
      <div className='time'>
        <h1>Среднее время:</h1>
        <h3>{obj.time}</h3>
      </div>
      <div className='time'>
        <h1>Стоимость:</h1>
        <h3>
          {obj.price}
          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17.3636 17C17.3636 15.7371 13.9447 14.7143 9.72727 14.7143M17.3636 17C17.3636 18.2629 13.9447 19.2857 9.72727 19.2857C5.50982 19.2857 2.09091 18.2629 2.09091 17M17.3636 17V22.6423C17.3636 23.944 13.9447 25 9.72727 25C5.50982 25 2.09091 23.9451 2.09091 22.6423V17M17.3636 17C21.5353 17 25 15.872 25 14.7143V3.28571M9.72727 14.7143C5.50982 14.7143 2.09091 15.7371 2.09091 17M9.72727 14.7143C4.90764 14.7143 1 13.5863 1 12.4286V6.71429M9.72727 4.42857C4.90764 4.42857 1 5.45143 1 6.71429M1 6.71429C1 7.97714 4.90764 9 9.72727 9C9.72727 10.1577 13.276 11.2857 17.4476 11.2857C21.6193 11.2857 25 10.1577 25 9M25 3.28571C25 2.02286 21.6182 1 17.4476 1C13.2771 1 9.89527 2.02286 9.89527 3.28571M25 3.28571C25 4.54857 21.6182 5.57143 17.4476 5.57143C13.2771 5.57143 9.89527 4.54857 9.89527 3.28571M9.89527 3.28571V14.904'
              stroke='#FF4646'
            />
          </svg>
        </h3>
      </div>
      <div>
      <h3>Ценность наград</h3>
      
      <svg className='line'
        width='382'
        height='4'
        viewBox='0 0 382 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect width='100%' height='4' rx='2' fill='white' />
        <rect width={obj.award} height='4' rx='2' fill='#FF4646' />
      </svg>
      </div>
       <Link to={'/'} className='back'>
        <h1>Вернуться назад</h1>
      </Link> 
    </div>
  );
}

export default CartItem;
