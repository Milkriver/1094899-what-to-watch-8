import React from 'react';
import { IReview } from '../../types/reviews';

interface IProps {
  reviews: IReview[],
}

export function MoviePageReviews({ reviews }: IProps): JSX.Element {

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{reviews[0].text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{reviews[0].author}</cite>
                        <time className="review__date" dateTime="2016-12-24">{reviews[0].date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{reviews[0].rating}</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{reviews[1].text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{reviews[1].author}</cite>
                        <time className="review__date" dateTime="2015-11-18">{reviews[1].date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{reviews[1].rating}</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{reviews[2].text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{reviews[2].author}</cite>
                        <time className="review__date" dateTime="2015-11-18">{reviews[2].date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{reviews[2].rating}</div>
                  </div>
                </div>
                <div className="film-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{reviews[3].text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{reviews[3].author}</cite>
                        <time className="review__date" dateTime="2016-12-20">{reviews[3].date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{reviews[3].rating}</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{reviews[4].text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{reviews[4].author}</cite>
                        <time className="review__date" dateTime="2016-12-20">{reviews[4].date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{reviews[4].rating}</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{reviews[5].text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{reviews[5].author}</cite>
                        <time className="review__date" dateTime="2016-12-20">{reviews[5].date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{reviews[5].rating}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>

  );
}
