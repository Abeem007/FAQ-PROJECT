import { useState } from "react";
import "./Home.css";

const infoData = [
  {
    id: 1,
    header: "What is Frontend Mentor,and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improvetheir frontend coding skills with projects in HTML,CSS and Javascript. It is suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    header: "Is Frontend Mentor free?",
    text: "Yes it is free.",
  },
  {
    id: 3,
    header: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you are allowed to use it to build your portfolio",
  },
  {
    id: 4,
    header: `How can I get help if I'm stuck on a challenge`,
    text: "You can reach out to us by sending a mail",
  },
];

const Home = () => {
  const [showText, setShowText] = useState(false);

  const toggleText = (id) => {
    setShowText((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  return (
    <div className="home-bg">
      {/* <img src="src\assets\images\background-pattern-desktop.svg" alt="" />  */}
      <div className="home__body-bg">
        <div className="home-header">
          <img src="src\assets\images\icon-star.svg" alt="" />
          <h1 className="home__header-h1">FAQs</h1>
        </div>
        <div className="home__body-content">
          {infoData.map((info, id) => (
            <a
              className="home__body-link"
              key={info.id}
              href="#"
              onClick={() => toggleText(info.id)}
            >
              <div className="home__body-text">
                <div className="home__text-content">
                  <h4
                    style={{
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    {info.header}
                  </h4>

                  <button
                    className="home__img-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleText(info.id);
                    }}
                  >
                    {showText[info.id] ? (
                      <img
                        className="home-img"
                        src="src\assets\images\icon-minus.svg"
                      />
                    ) : (
                      <img
                        className="home-img "
                        src="src\assets\images\icon-plus.svg"
                        alt=""
                      />
                    )}
                  </button>
                </div>
                {showText[info.id] ? (
                  <p
                    className="home__p"
                    style={{ color: showText[info.id] ? "purple" : "black" }}
                  >
                    {info.text}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
