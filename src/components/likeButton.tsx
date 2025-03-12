import { useState } from "react";
import { set } from "react-hook-form";


export default function LikeButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorM, setErrorM] = useState(null)
  const [liked, setLiked] = useState(false)

  async function handleLike() {
    try {
      setIsLoading(true)
      setErrorM(null)
      const respons = await fetch(
        'https://www.greatfrontend.com/api/questions/like-button',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: liked ? 'unlike' : 'like' })
        }
      )
      if (!respons.ok) {
        const res = await respons.json()
        setErrorM(res.message)
        return
      }
      setLiked(!liked)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button
        disabled={isLoading}
        className={`border-2 rounded-xl px-2 py-1 font-bold
                  ${liked ? 'border-red-400 bg-red-400 text-white' :
            'border-gray-500 text-gray-500 hover:border-red-400 hover:text-red-400'}`}

        onClick={handleLike}
      >
        {liked ? "like" : "unlike"}
      </button>
      {errorM && <p>{errorM}</p>}

    </div>
  );
}
