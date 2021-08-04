import React from 'react';
import {Header} from '../components/header/Header';
import {Banner} from '../components/page/banner/Banner'
import { Product } from '../components/page/product/Product';
import {News} from '../components/page/news/News';
import {Video} from '../components/page/video/Video';
import {Msg} from '../components/page/message/Msg';
import { Contact } from '../components/contact/Contact';
import {Post} from '../components/page/news/Post';
import {Blog} from '../components/page/news/Blog';


export class AppContainer extends React.Component{
    render(){
        return(
        <div className="AppContainer">
           {/* <div>
                <SearchBar/>
           </div>*/}
            <div>
                <Banner/>
            </div>
            <div>
                <Product/>
            </div>
            <div>
                <Video/>
            </div>
            <div>
                <Msg/>
            </div>
            <div>
                <News/>
            </div>
        </div>
        );
    }
};