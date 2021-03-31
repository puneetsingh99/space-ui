export const CommentCard = () => {
    return (
        <div className="flex justify-between mb-6">
        <div>
          <img
            className="responsive-img-round profile-card__img"
            src="https://i.pinimg.com/originals/45/d3/38/45d33896980263356cd4d66380f17464.jpg"
            alt="planet"
          />
        </div>

        <div className="ml-8">
          <p className="card-text-title text-xl">Puneet Singh</p>

          <p className="card-text-body text-lg">
            <span role="img" aria-label="jsx-a11y">
              👋
            </span>{" "}
            I am Puneet, I am an aspiring Fullstack Web Dev currently learning
            MERN stack at neogCamp. Follow me on twitter at{" "}
            <code className="code-line">@puneetsingh1999</code> and on Instagram{" "}
            <code className="code-line">@thelastspacetraveller</code>. I post
            about learnings from my journey over there!
          </p>
        </div>
      </div>

    )
}