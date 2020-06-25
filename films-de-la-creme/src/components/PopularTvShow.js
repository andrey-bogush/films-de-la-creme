import React, { Component } from 'react'
import '../css/PopularTvShow.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class PopularTvShow extends React.Component {

    state = {
        loading: true,
        tvShow: [],
        poster: '',
        name: "React"
    }


    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/tv/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1&include_adult=false";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ tvShow: data.results, loading: false })
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })
    }

    render() {
        return (
            <div className="PopularTv">
                <h1>Popular Tv Shows <a href="/tv/popular"><span>Explore All</span></a></h1>

                <Carousel
                    slidesPerPage={5}
                    arrows
                    infinite
                >

                    {this.state.tvShow.map((tvShow, poster, i) => {
                        return (
                            <div className="popular-details">
                                <div className="image">
                                    <img src={this.state.poster + tvShow.poster_path} alt="" />
                                </div>

                                <div className="details">
                                    <h2>{tvShow.name}</h2>
                                    <h3>
                                        <i class="fas fa-star"></i> {tvShow.vote_average}/10
                                    </h3>

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                </Carousel>
            </div>
        )
    }
}

export default PopularTvShow