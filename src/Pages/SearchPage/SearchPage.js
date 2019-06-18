import React from 'react';
import style from './SearchPage.module.scss';

function SearchPage() {
  return (
    <div>
      <form className={style.searchform}>
        <input type="search" className={style.input} />
        <button className={style.button}>Search</button>
      </form>
    </div>
  );
}

export default SearchPage;
