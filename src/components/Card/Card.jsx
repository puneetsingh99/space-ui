import "../../app-styles.css"
import { useState } from "react";
import { AddToWishListHeart, Dismiss } from "../../assets";

export const Card = () => {
  const [addToWishlist, setAddToWishlist] = useState(false);
  return (
    <div className="w-full m-auto mb-8 text-left">
      <h1 className="mb-6 text-3xl">Card</h1>

      <div className="card-container">
        <div className=" mr-12">
          {/* e-commerce card */}
          <div className="card">
            <img
              className="responsive-img"
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10394735/2019/12/2/be4ef123-2e89-4c4e-bb15-de0a8c2bc32c1575283048006-ADIDAS-Women-Casual-Shoes-7521575283046929-1.jpg"
              alt="shoes"
            />

            <div className="p-2">
              <p className="brand-name">
                ADIDAS{" "}
                <span
                  className={`wishlist-icon ${
                    addToWishlist ? "text-red-500" : "text-gray-800"
                  }`}
                  onClick={() => setAddToWishlist(!addToWishlist)}
                >
                  <AddToWishListHeart toggle={addToWishlist} />
                </span>{" "}
              </p>

              <p className="model-name">
                Women Vl court skate boarding and jumping
              </p>
              <p className="price">
                Rs.2999 <span className="mrp">Rs.4999</span>
                <span className="offer">(40% OFF)</span>
              </p>
            </div>
          </div>
        </div>
        {/* card description */}
        <div>
          <p className="mb-6 text-lg text-gray-600">
            To use e-commerce card use code from the snippet below. <br /> In
            order to wire the add to wishlist functionality, we need to pass a{" "}
            <code className="code-line">toggle</code> prop to <br />{" "}
            <code className="code-line">&lt; AddToWishListHeart /&gt;</code>{" "}
            icon. e.g.
            <br />
            <code className="code-line">
              &lt; AddToWishListHeart toggle = {`{toggleProp}`} /&gt;
            </code>
          </p>
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="card">
  <img
    className="responsive-img"
    src="example/product.jpg"
    alt="shoes"
  />
  <div className="p-2">
    <p className="brand-name">
    ADIDAS{" "}
      <span `}
            className=
            {`{\`wishlist-icon \${
        addToWishlist ? "text-red-500" : "text-gray-800"}\`}
        onClick={() => setAddToWishlist(!addToWishlist)}
      >
        <AddToWishListHeart toggle={addToWishlist} />
      </span>{" "}
    </p>
      <p className="model-name">
        Women Vl court skate boarding and jumping
      </p>
      <p className="price">
        Rs.2999 {" "}<span className="mrp">Rs.4999</span>
        <span className="offer">(40% OFF)</span>
      </p>
    </div>
  </div>`}
          </code>
        </pre>
      </div>

      {/* card  with badge */}
      <h1 className="mb-6 text-2xl">Card with Badge</h1>

      <div className="flex justify-between items-start mb-6 card-container">
        {/* card description */}

        <div className="mr-12">
          <p className="mb-6 text-lg text-gray-600">
            To use a card with badge, in this case a{" "}
            <code className="code-line">TRENDING</code> badge; we need to make a
            simple addition to e-commerce card as shown in the snippet below.
          </p>
        </div>
        <div>
          {/* e-commerce card with badge */}
          <div className="card">
            <div className="product-image">
              <img
                className="responsive-img"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10394735/2019/12/2/be4ef123-2e89-4c4e-bb15-de0a8c2bc32c1575283048006-ADIDAS-Women-Casual-Shoes-7521575283046929-1.jpg"
                alt="shoes"
              />
              <span className="product-badge">TRENDING</span>
            </div>

            <div className="p-2">
              <p className="brand-name">
                ADIDAS{" "}
                <span
                  className={`wishlist-icon ${
                    addToWishlist ? "text-red-500" : "text-gray-800"
                  }`}
                  onClick={() => setAddToWishlist(!addToWishlist)}
                >
                  <AddToWishListHeart toggle={addToWishlist} />
                </span>{" "}
              </p>

              <p className="model-name">
                Women Vl court skate boarding and jumping
              </p>
              <p className="price">
                Rs.2999 <span className="mrp">Rs.4999</span>
                <span className="offer">(40% OFF)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="card">
  <div className="product-image">
    <img
      className="responsive-img"
      src="example/product.jpg"
      alt="shoes"
    />
    <span className="product-badge">TRENDING</span>
  </div>
  <div className="p-2">
    <p className="brand-name">
    ADIDAS{" "}
      <span `}
            className=
            {`{\`wishlist-icon \${
        addToWishlist ? "text-red-500" : "text-gray-800"}\`}
        onClick={() => setAddToWishlist(!addToWishlist)}
      >
        <AddToWishListHeart toggle={addToWishlist} />
      </span>{" "}
    </p>
      <p className="model-name">
        Women Vl court skate boarding and jumping
      </p>
      <p className="price">
        Rs.2999 {" "}<span className="mrp">Rs.4999</span>
        <span className="offer">(40% OFF)</span>
      </p>
    </div>
  </div>`}
          </code>
        </pre>
      </div>

      {/* card with dismiss */}
      <h1 className="mb-6 text-2xl">Card with Dismiss</h1>
      <div className="flex justify-between items-start mb-6 card-container">
        <div className="mr-12">
          {/* e-commerce dismiss card */}
          <div className="card">
            <div className="product-image">
              <img
                className="responsive-img"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10394735/2019/12/2/be4ef123-2e89-4c4e-bb15-de0a8c2bc32c1575283048006-ADIDAS-Women-Casual-Shoes-7521575283046929-1.jpg"
                alt="shoes"
              />
              <span className="product-dismiss">
                {" "}
                <Dismiss />{" "}
              </span>
            </div>

            <div className="p-2">
              <p className="brand-name">
                ADIDAS{" "}
                <span
                  className={`wishlist-icon ${
                    addToWishlist ? "text-red-500" : "text-gray-800"
                  }`}
                  onClick={() => setAddToWishlist(!addToWishlist)}
                >
                  <AddToWishListHeart toggle={addToWishlist} />
                </span>{" "}
              </p>

              <p className="model-name">
                Women Vl court skate boarding and jumping
              </p>
              <p className="price">
                Rs.2999 <span className="mrp">Rs.4999</span>
                <span className="offer">(40% OFF)</span>
              </p>
            </div>
          </div>
        </div>
        {/* card description */}
        <div>
          <p className="mb-6 text-lg text-gray-600">
            To use e-commerce card use code from the snippet below. <br /> In
            order to wire the add to wishlist functionality, we need to pass a{" "}
            <code className="code-line">toggle</code> prop to <br />{" "}
            <code className="code-line">&lt; AddToWishListHeart /&gt;</code>{" "}
            icon. e.g.
            <br />
            <code className="code-line">
              &lt; AddToWishListHeart toggle = {`{toggleProp}`} /&gt;
            </code>
          </p>
        </div>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="card">
  <div className="product-image">
  <img
    className="responsive-img"
    src="example/product.jpg"
    alt="shoes"
  />
  <span className="product-dismiss"><Dismiss/></span>
</div>
  <div className="p-2">
    <p className="brand-name">
    ADIDAS{" "}
      <span `}
            className=
            {`{\`wishlist-icon \${
        addToWishlist ? "text-red-500" : "text-gray-800"}\`}
        onClick={() => setAddToWishlist(!addToWishlist)}
      >
        <AddToWishListHeart toggle={addToWishlist} />
      </span>{" "}
    </p>
      <p className="model-name">
        Women Vl court skate boarding and jumping
      </p>
      <p className="price">
        Rs.2999 {" "}<span className="mrp">Rs.4999</span>
        <span className="offer">(40% OFF)</span>
      </p>
    </div>
  </div>`}
          </code>
        </pre>
      </div>

      {/* Card with text */}
      <h1 className="mb-6 text-2xl"> Text Card</h1>

      <div className="flex justify-between items-start mb-6 card-container">
        <div className="mr-12">
          {/* card description */}
          <div>
            <p className="mb-6 text-lg text-gray-600 text-left">
              To use text card, use code from the snippet below. <br /> It is a
              modification of e-commerce card, hence it is created by adding
              some new classes to it and by removing some elements from it.{" "}
            </p>
          </div>
        </div>

        {/* text card */}
        <div className="card card-text">
          <img
            className="responsive-img"
            src="https://i.pinimg.com/originals/45/d3/38/45d33896980263356cd4d66380f17464.jpg"
            alt="planet"
          />

          <div className="p-2">
            <p className="card-text-title">Planet</p>

            <p className="card-text-body text-base">
              A planet is an astronomical body orbiting a star or stellar
              remnant that is massive enough to be rounded by its own gravity,
              is not massive enough to cause thermonuclear fusion, and –
              according to the International Astronomical Union but not all
              planetary scientists – has cleared its neighbouring region of
              planetesimals
            </p>
          </div>
        </div>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="card card-text">
  <img
    className="responsive-img"
    src="example/product.jpg"
    alt="shoes"
  />
  <div className="p-2">
    <p className="card-text-title">
      Planet
    </p>
    <p className="card-text-body">
      A planet is an astronomical body orbiting a star or stellar
      remnant that is massive enough to be rounded by its own gravity,
      is not massive enough to cause thermonuclear fusion, and –
      according to the International Astronomical Union but not all
      planetary scientists – has cleared its neighbouring region of
      planetesimals
    </p>
  </div>
</div>`}
          </code>
        </pre>
      </div>

      {/* horizontal card */}
      <h1 className="mb-6 text-2xl"> Horizontal Text Card</h1>

      {/* card description */}
      <div>
        <p className="mb-6 text-lg text-gray-600 text-left">
          To use horizontal text card, use the code from the snippet below. It
          uses <code className="code-line">cart-text-horizontal</code> and other
          supporting classes. <br />
          It is a modification of normal card with text.
        </p>
      </div>

      {/* horizontal card */}
      <div className="card-text-horizontal mb-6">
        <div className="card-text-img">
          <img
            className="responsive-img"
            src="https://i.pinimg.com/originals/45/d3/38/45d33896980263356cd4d66380f17464.jpg"
            alt="planet"
          />
        </div>

        <div className="card-text-content">
          <p className="card-text-title">Planet</p>

          <p className="card-text-body text-lg">
            A planet is an astronomical body orbiting a star or stellar remnant
            that is massive enough to be rounded by its own gravity, is not
            massive enough to cause thermonuclear fusion, and – according to the
            International
          </p>
        </div>
      </div>

      {/* horizontal card code-snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="card-text-horizontal">
  <div className="card-text-img">
    <img
      className="responsive-img"
      src="example/planet.jpg"
      alt="planet"
    />
    </div>
      <div className="card-text-content">
        <p className="card-text-title">Planet</p>
        <p className="card-text-body text-lg">
          A planet is an astronomical body orbiting a star or stellar remnant
          that is massive enough to be rounded by its own gravity, is not
          massive enough to cause thermonuclear fusion, and – according to the
          International
        </p>
    </div>
</div>`}
          </code>
        </pre>
      </div>

      <h1 className="mb-6 text-2xl"> Horizontal Profile Card</h1>

      {/* card description */}
      <div>
        <p className="mb-6 text-lg text-gray-600 text-left">
          To use horizontal Profile Card, use the code from the snippet below.
          It is a modification of normal horizontal card with the help utility
          classes.
        </p>
      </div>

      {/* horizontal profile card*/}
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

      {/* horizontal profile card code-snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="flex justify-between mb-6">
  <div className="w-250">
    <img
      className="responsive-img-round avatar-xl"
      src="img/planet.jpg"
      alt="planet"
    />
    </div>
      <div className="ml-8">
      <p className="card-text-title text-xl">Puneet Singh</p>
      <p className="card-text-body text-lg">
        <span role="img" aria-label="jsx-a11y">
          👋
        </span>{" "}
        I am Puneet, an aspiring Fullstack Web Dev currently learning
        MERN stack at neogCamp. Follow me on twitter at{" "}
        <code className="code-line">@puneetsingh1999</code> and on Instagram{" "}
        <code className="code-line">@thelastspacetraveller</code>. I post
        about learnings from my journey over there!
      <p>
  </div>
</div>`}
          </code>
        </pre>
      </div>

      {/* Card with text overlay */}
      <h1 className="mb-6 text-2xl">Card with text overlay</h1>

      {/* card description */}
      <div>
        <p className="mb-6 text-lg text-gray-600 text-left">
          To use card with text overlay use the code from the snippet below.
        </p>
      </div>

      <div className="card-text-overlay mb-6">
        <img
          className="responsive-img"
          src="https://i.pinimg.com/originals/45/d3/38/45d33896980263356cd4d66380f17464.jpg"
          alt="planet"
        />
        <div className="text-overlay">
          <div className="mb-6">
            <p className="text-2xl font-semibold mb-2">Planet</p>
            <p className="text-lg text-overlay__text">
              A planet is an astronomical body orbiting a star or stellar
              remnant that is massive enough to be rounded by its own gravit.
            </p>
          </div>
        </div>
      </div>

      {/* card with text overlay code snippet  */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="card-text-overlay">
  <img
    className="responsive-img"
    src="img/planet.jpg"
    alt="planet"
  />
  <div className="text-overlay">
    <div className="card-text-only mb-6">
    <p className="text-2xl font-semibold mb-2">Planet</p>
    <p className="text-lg">
      A planet is an astronomical body orbiting a star or stellar
      remnant that is massive enough to be rounded by its own gravity.
    </p>
    </div>
  </div>
</div>`}
          </code>
        </pre>
      </div>

      {/* Text only card */}
      <h1 className="mb-6 text-2xl"> Text only Card</h1>

      {/* card description */}
      <div>
        <p className="mb-6 text-lg text-gray-600 text-left">
          A horizontal text only card can be generated with the help of utility
          classes as shown in the snippet below.
        </p>
      </div>

      {/* horizontal card */}
      <div className="card-text-only mb-6">
        <p className="text-2xl font-semibold mb-2">Planet</p>
        <p className="text-lg">
          A planet is an astronomical body orbiting a star or stellar remnant
          that is massive enough to be rounded by its own gravity, is not
          massive enough to cause thermonuclear fusion, and – according to the
          International International Astronomical Union but not all planetary
          scientists – has cleared its neighbouring region of planetesimals. The
          term planet is ancient, with ties to history, astrology, science,
          mythology, and religion. Apart from Earth itself, five planets in the
          Solar System are often visible to the naked eye. These were regarded
          by many early cultures as divine, or as emissaries of deities.
        </p>
      </div>

      {/* text only horizontal card code-snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div>
  <p className="text-2xl font-semibold mb-2">Planet</p>
  <p className="text-lg">
      A planet is an astronomical body orbiting a star or stellar remnant
      that is massive enough to be rounded by its own gravity, is not
      massive enough to cause thermonuclear fusion, and – according to the
      International International Astronomical Union but not all planetary
      scientists – has cleared its neighbouring region of
      planetesimals.The term planet is ancient, with ties to
      history, astrology, science, mythology, and religion. Apart from Earth
      itself, five planets in the Solar System are often visible to the
      naked eye. These were regarded by many early cultures as divine, or as
      emissaries of deities.
  </p>
</div>
`}
          </code>
        </pre>
      </div>

      {/* vertical text only card */}
      {/* Text only card */}
      <h1 className="mb-6 text-2xl"> Vertical Text Card</h1>
      <div>
        <p className="mb-6 text-lg text-gray-600 text-left">
          A vertical text only card can be generated with the help of utility
          classes as shown in the snippet below.
        </p>
      </div>

      <div className="card card-text card-text--vertical p-4 mb-6">
        <p className="text-2xl font-semibold mb-2">Planet</p>
        <p className="text-lg">
          A planet is an astronomical body orbiting a star or stellar remnant
          that is massive enough to be rounded by its own gravity, is not
          massive enough to cause thermonuclear fusion, and according to the
          International International Astronomical Union but not all planetary
          scientists has cleared its neighbouring region of planetesimals.
        </p>
      </div>

      {/* text only horizontal card code-snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="mb-6">
  <p className="text-2xl font-semibold mb-2">Planet</p>
  <p className="text-lg">
      A planet is an astronomical body orbiting a star or stellar remnant
      that is massive enough to be rounded by its own gravity, is not
      massive enough to cause thermonuclear fusion, and – according to the
      International International Astronomical Union but not all planetary
      scientists – has cleared its neighbouring region of
      planetesimals.The term planet is ancient, with ties to
      history, astrology, science, mythology, and religion. Apart from Earth
      itself, five planets in the Solar System are often visible to the
      naked eye. These were regarded by many early cultures as divine, or as
      emissaries of deities.
  </p>
</div>
`}
          </code>
        </pre>
      </div>
    </div>
  );
};
