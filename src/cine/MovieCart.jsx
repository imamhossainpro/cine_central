/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImageURL } from "../utils/cine-utility";
import Rating from "./Rating";
import TagIcon from "../assets/tag.svg";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
import { toast } from "react-toastify";
const MovieCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  function handleAddToCart(e, movie) {
    e.stopPropagation();
    const found = state.cartData.find((item) => item.id === movie.id);

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`Movie ${movie.title} Added Successfully`, {
        position: "bottom-right",
      });
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the card already!`,
        {
          position: "bottom-right",
        }
      );
    }
  }

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleMovieSelection() {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
        <button href='#' onClick={() => handleMovieSelection(movie)}>
          <img
            className='w-full object-cover'
            src={getImageURL(`${movie.cover}`)}
            alt={movie.title}
          />
          <figcaption className='pt-4'>
            <h3 className='text-xl mb-1'>{movie.title}</h3>
            <p className='text-[#575A6E] text-sm mb-2'>{movie.description}</p>
            <div className='flex items-center space-x-1 mb-5'>
              <Rating value={movie.rating} />
            </div>
            <a
              className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
              href='#'
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={TagIcon} alt={TagIcon} />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </button>
      </figure>
    </>
  );
};

export default MovieCart;
