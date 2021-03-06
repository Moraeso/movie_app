import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async() => {
        const {
            data: {
                data : { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false}); // 여기 await 안 써져도 왜 되지?
    };
    componentDidMount() {
        this.getMovies();
    }

    renderMovies = () => {
        const { movies } = this.state;
        return (
            movies.map(movie => {
                return <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                />
            }));
    };

    render() {
        const { isLoading } = this.state;
        return (
            <section className="container">
                { isLoading ? (
                    <div className="loader">
                        <span className="loader__text">"Loading..."</span>
                    </div>
                ) : (
                    <div className="movies">
                        { this.renderMovies() }
                    </div>
                )}
            </section>
        );
    };
}

export default Home;