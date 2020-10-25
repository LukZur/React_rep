import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        titleColumn1: PropTypes.node,
        titleColumn2: PropTypes.node,
        titleColumn3: PropTypes.node,
        children: PropTypes.node,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
    render() {
        return (
            <section className={styles.component}>

                <Hero titleText={this.props.title} image_src={this.props.img_src} />
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column columnText={this.props.titleColumn1} />
                    <Column columnText={this.props.titleColumn2} />
                    <Column columnText={this.props.titleColumn3} />
                </div>
            </section>
        )
    }
}



export default List;

//pierwotnie w linii 9
{/* <h2 className={styles.subtitle}>This is text for h2 in List.js</h2> */ }

