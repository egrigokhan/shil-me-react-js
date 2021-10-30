import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App
    props={{
      rooms: [
        {
          title: "Main Room",
          background_color: "beige",
          shadow: true,
          items: [
            {
              position: {
                x: 90,
                y: 200
              },
              image_url:
                "https://miro.medium.com/max/700/1*5AyYzOlGlv501PlJlIdZZQ.jpeg",
              matting: {
                applied: true,
                color: "beige",
                percentage: 10
              },
              frame: {
                applied: true,
                color_or_image: true,
                color: "gold",
                image: "",
                width: 10
              }
            },
            {
              position: {
                x: 700,
                y: 240
              },
              image_url:
                "https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-jumbo.jpg?quality=75&auto=webp",
              matting: {
                applied: false,
                color: "white",
                percentage: 40
              },
              frame: {
                applied: false,
                color_or_image: true,
                color: "green",
                image: "",
                width: 10
              }
            }
          ]
        },
        {
          title: "Side Room",
          background_color: "yellow",
          shadow: false,
          items: [
            {
              position: {
                x: 45,
                y: 765
              },
              image_url:
                "https://miro.medium.com/max/700/1*5AyYzOlGlv501PlJlIdZZQ.jpeg",
              matting: {
                applied: true,
                color: "beige",
                percentage: 10
              },
              frame: {
                applied: true,
                color_or_image: true,
                color: "gold",
                image: "",
                width: 10
              }
            },
            {
              position: {
                x: 330,
                y: 670
              },
              image_url:
                "https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-jumbo.jpg?quality=75&auto=webp",
              matting: {
                applied: false,
                color: "white",
                percentage: 40
              },
              frame: {
                applied: false,
                color_or_image: true,
                color: "green",
                image: "",
                width: 10
              }
            }
          ]
        }
      ]
    }}
  />,
  rootElement
);
