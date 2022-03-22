import { genre_movie, genre_tv } from '../../constants/genre';
import classes from './Card.module.css';

const Card = (props) => {
    const media_type = props.type || props.item.media_type;
    const title = media_type === "movie" ? props.item.title : props.item.name;
    const poster_path = props.item.poster_path;
    const vote_average = props.item.vote_average;
    const release_date = media_type === "movie" ? props.item.release_date : props.item.first_air_date;
    const language = props.item.original_language;

    const genres = props.item.genre_ids.map((id) => {
        if (media_type === "movie") {
            return genre_movie[id];
        } else {
            return genre_tv[id];
        }

    });


    const clickHandler = () => {
        console.log(props.item.id);
        console.log(genres);
    };

    return (
        <div className={classes.card} onClick={clickHandler}>
            <img src={"https://image.tmdb.org/t/p/original" + poster_path} className={classes.poster} />
            <ul className={classes.card_content}>
                <li id={classes.title}>{title}</li>
                <li>Language : {language}</li>
                <li>Genres : {genres.join(", ")} </li>
                <li>Release Date : {release_date}</li>
                <li> Ratings : {vote_average}</li>
                <li>Type : {media_type}</li>
            </ul>
        </div>);
};

export default Card;