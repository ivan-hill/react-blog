import React from 'react';
import { Link } from 'react-router-dom';

class ArticlePage extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
        };  
                                        

    render() {
        const {image, title } = this.props;

        return (
          <div id="articlepage-con">
            <div id="image-container" className={image}></div>
            <div id="article-page-text">
              <h1>{title}</h1>
              <h5>
                written by <Link to="/author-page">Ivan Hill</Link>
              </h5>
              <div id="article-page-media">
                <i className="fas fa-share"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
            <div id="article-page-p">
              <p>
                <h3> Are you thinking about moving to Switzerland?</h3>
              </p>
              <p>
                Are you thinking about moving to Switzerland? Are you curious to
                find out what living here might be like for you and your family?
                Then you’re in the right place. Before you start to worry about
                how to open a bank account, what's the deal with health
                insurance and how to find a home to rent in Switzerland, let's
                talk about what it feels to live here.
              </p>
              <p>
                You'll love Switzerland Switzerland is a beautiful country with
                breath-taking landscapes and impeccable infrastructure.
              </p>

              <p>
                {" "}
                Outdoors sports enthusiasts will be in heaven here. There are
                hiking and biking routes marked and signalled in the most remote
                corners of Switzerland. From paragliding to light hikes, you’ll
                surely find some kinds of physical activity you’ll love. And
                consequently always have a good excuse to eat pizza with lots of
                cheese.
              </p>

              <p>(Sorry, enough about cheese!)</p>
              <p>
                The country’s high standard of living also translates into a
                high cost of living, but you generally get what you pay for in
                Switzerland (especially when it comes to wine and cheese!). That
                being said, let’s dive into the most basic things we think you
                should know before you decide to move here:
              </p>
              <p>
                <ul>
                  <h4>
                    <li>Is learning the local Swiss language a must?</li>
                  </h4>
                </ul>
                There are four official languages in Switzerland with English
                running in an unofficial fifth place. A basic grasp of German
                will take you a long way in the Swiss German part and if you
                happen to land in Geneva, then naturally, French is of great
                benefit.
              </p>
              <p>
                <ul>
                  <h4>
                    <li>
                      Is finding a home to rent in Switzerland difficult? YES!
                    </li>
                  </h4>
                        </ul>
                        </p>
                <p>
                  Especially in the bigger cities, vacancy rates are extremely
                  low, so make sure you set the right expectations for yourself
                  and your family: decide on the deal breakers and the things
                  you can do without.{" "}
                </p>
                <p>
                  {" "}
                  If you’re a newcomer to Switzerland, you might want to look
                  for apartments in urban areas that are well connected by
                  public transport. Living in the countryside may be idyllic and
                  it is definitely easier to find available properties outside
                  the large cities, but if you don’t speak the local language,
                  you may end up feeling a little lonely.{" "}
             </p>
             <p>Nothing really prepares you for how tough it is to find a home
                to rent in Switzerland, especially in the large cities. For
                new-comers to Switzerland things are particularly difficult if
                they don’t speak the local Swiss language. It’s not uncommon for
                real estate agents to simply hang up the phone if you start the
                conversation in English.
            </p>
               </div>
            </div>
          
        );
    }
};


export default ArticlePage