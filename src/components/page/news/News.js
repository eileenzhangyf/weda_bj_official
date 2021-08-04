import React from 'react';
import './News.css';
import {Menu} from './Menu';
import {Test} from './Test';
import {Blog} from './Blog';
import {Post} from './Post';
import { Link } from 'react-router-dom';
import img66 from './image66.png';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useParams
  } from 'react-router-dom';

function BlogPost() {
    // We can call useParams() here to get the params,
    // or in any child element as well!
    let { slug } = useParams()
    // ...
}

export class News extends React.Component{
    render(){
        return(
            <div className="news" id={'news'}>
                <h1>新闻中心</h1>
                <div className="postbody">
                <img src={img66} width="480" height="320" className="postimg"/>
              {/* <Router>
                    <main>
                        <Switch>
                            <Route exact path="/blog" component={Blog}/>
                            <Route path="/blog/:slug" render={Post} />
                        </Switch>
                    </main>
              </Router>*/}
                <Blog/>
                </div>
            </div>
        );
    }
};