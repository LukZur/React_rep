import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, listData } from '../../data/dataStore';


class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}

export default App;

//titleColumn={['Animals', 'Plants', 'Minerals']} 'Animalsss'
{/* <List title={['Things to do ', <sup key='1'>soon!</sup>]} img_src="./src/images/space.png" titleColumn1='Animals' titleColumn2='Plants' titleColumn3='Minerals'>

  <p>I'm planning on doing all these things sooner, rather than later!</p>
</List> */}
