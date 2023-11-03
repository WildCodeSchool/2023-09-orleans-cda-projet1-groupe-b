import { useState } from 'react';

export default function RatingComments({
  setVote,
  ratingsCount,
  setRatingsCount,
}) {
  const [userName, setLocalUserName] = useState('');
  const [userComment, setLocalUserComment] = useState('');
  const [localVote, setLocalVote] = useState(0);
  const [errorRating, setErrorRating] = useState(null);
  const [errorPseudo, setErrorPseudo] = useState(null);
  const [errorComment, setErrorComment] = useState(null);

  const handleClick = (star) => {
    if (localVote === star) {
      setLocalVote(0); // Si l'utilisateur clique sur la même étoile, le state réinitialise le vote
    } else {
      setLocalVote(star); // Sinon, mise à jour du vote via sélection de la nouvelle étoile
    }
    setErrorRating(null); // Réinitialise l'erreur de champ vide à chaque fois qu'un vote est effectué
  };

  const handleUserNameChange = (e) => {
    setLocalUserName(e.target.value);
    setErrorPseudo(
      e.target.value.trim() === '' ? 'Please enter a pseudo' : null,
    );
  };

  const handleUserCommentChange = (e) => {
    setLocalUserComment(e.target.value);
    setErrorComment(
      e.target.value.trim() === '' ? 'Please type a comment' : null,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localVote === 0) {
      setErrorRating('Please select a rating before submitting');
    } else {
      setErrorRating(null);
    }

    // Vérifie le remplissage du champ pseudo
    if (userName.trim() === '') {
      setErrorPseudo('Please enter a pseudo before submitting');
    } else {
      setErrorPseudo(null);
    }

    // Vérifie le remplissage du champ commentaire
    if (userComment.trim() === '') {
      setErrorComment('Please type a comment before submitting');
    } else {
      setErrorComment(null);
    }

    if (
      localVote !== 0 &&
      userName.trim() !== '' &&
      userComment.trim() !== ''
    ) {
      setVote(localVote);
      // Réinitialise les champs du formulaire si nécessaire
    }

    setRatingsCount(ratingsCount + 1);
    setLocalUserName('');
    setLocalUserComment('');
    setLocalVote(0);
  };

  return (
    <div className="flex-grow rounded-lg border border-solid border-primary bg-gradient-to-l from-primary/30 to-primary/20 px-3 text-start">
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="pb-2 text-lg text-light" htmlFor="character">
            Pseudo
          </label>
          <input
            id="character"
            name="character"
            type="text"
            placeholder="Your pseudo"
            className="items-center rounded bg-tertiary p-2 pl-3 text-light"
            onChange={handleUserNameChange}
          />
          <div>
            {errorPseudo && (
              <div className="w-fit rounded bg-light p-1 text-red-500">
                {errorPseudo}
              </div>
            )}
          </div>
        </div>
        <div className="my-3 mb-5 flex flex-col">
          <label className="pb-2 text-lg text-light" htmlFor="character">
            Comment
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Comment here..."
            className="rounded bg-tertiary pb-[2.5rem] pl-3 pt-2 text-light"
            onChange={handleUserCommentChange}
          />
          <div>
            {errorComment && (
              <div className="w-fit rounded bg-light p-1 text-red-500">
                {errorComment}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-lg text-light">Rate this game</div>
          <div className="flex flex-row-reverse items-center gap-3">
            <div>
              {errorRating && (
                <div className="w-fit rounded bg-light p-1 text-red-500">
                  {errorRating}
                </div>
              )}
            </div>
            <svg
              className={`peer h-7 w-7 ${
                localVote === 5 ? 'text-yellow-300' : 'text-tertiary'
              } hover:text-yellow-300 peer-hover:text-yellow-300`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
              onClick={() => handleClick(5)}
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`peer h-7 w-7 ${
                localVote >= 4 ? 'text-yellow-300' : 'text-tertiary'
              } hover:text-yellow-300 peer-hover:text-yellow-300`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
              onClick={() => handleClick(4)}
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`peer h-7 w-7 ${
                localVote >= 3 ? 'text-yellow-300' : 'text-tertiary'
              } hover:text-yellow-300 peer-hover:text-yellow-300`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
              onClick={() => handleClick(3)}
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`peer h-7 w-7 ${
                localVote >= 1 ? 'text-yellow-300' : 'text-tertiary'
              } hover:text-yellow-300 peer-hover:text-yellow-300`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
              onClick={() => handleClick(1)}
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <div className="me-4 mt-10 flex justify-end gap-4">
          <button
            className="h-10 w-28 -skew-x-35 rounded-lg border border-primary text-lg font-bold text-primary"
            type="reset"
          >
            <div className="skew-x-35">Cancel</div>
          </button>
          <button
            className="h-10 w-28 -skew-x-35 rounded-lg border border-primary bg-primary text-lg font-bold text-tertiary"
            onClick={handleSubmit}
          >
            <div className="skew-x-35">Submit</div>
          </button>
        </div>
      </form>
    </div>
  );
}
