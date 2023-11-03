import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
    {
        title: '简单易懂',
        //Svg: require('@site/static/img/Easy.svg').default,
        description: (
            <>
                “银发族”使用指南尽可能使用更多的文字描述手机层面的操作，让幼儿园的小孩也能轻松掌握。
            </>
        ),
    },
    {
        title: '全面教学',
        //Svg: require('@site/static/img/Free.svg').default,
        description: (
            <>
                从输入法到微信，从微信到支付宝，从支付宝再到娱乐软件......我们尽可能在文档中包含更多的内容。
            </>
        ),
    },
    {
        title: 'All in One',
        //Svg: require('@site/static/img/Feature.svg').default,
        description: (
            <>
                网站内置多种教学方式，包含文字+图片、视频教程，我们还贴心配备了“一键打开指定软件”等功能
            </>
        ),
    },
];

function Feature({title, description}) {
    return (
        <div className={clsx('col col--4')}>

            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}