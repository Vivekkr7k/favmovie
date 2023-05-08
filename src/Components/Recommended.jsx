import React from "react";
import '../styles/Recommended.css'
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import batman from "../movieposters/The Dark Knight.jpg";
import shaw from "../movieposters/The Shawshank Redemption.jpg";
import jhon1 from "../movieposters/jhon wick 1.jpg"
import jhon4 from "../movieposters/l_john-wick-chapter-4-movie-poster_2c8df497.jpg"
import marian from  "../movieposters/martian.jpg"


const Recommended = () => {
  return (
    <> 
      <h1 className="my-5 text-center">Recommended Movies</h1>
      <div className="flex items-center justify-center container ">
        <div className="m-2">
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src={batman} className="card-image" />
            <Card.Body>
              <Card.Title>Batman The dark knight</Card.Title>
              <Card.Text className="text-sm">
              With his back against the wall, Batman turns to his closest allies to help him save Gotham City from the clutches of Scarecrow and the Arkham Knight  ...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="m-2">
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src={shaw} className="card-image" />
            <Card.Body>
              <Card.Title> Shawshank Redemption</Card.Title>
              <Card.Text className="text-sm">
               Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="m-2">
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src={jhon1} className="card-image" />
            <Card.Body>
              <Card.Title>Jhon Wick Chapter 1</Card.Title>
              <Card.Text className="text-sm">
              An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="m-2">
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src={marian} className="card-image" />
            <Card.Body>
              <Card.Title>The martian</Card.Title>
              <Card.Text className="text-sm">
              An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="m-2">
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src={jhon4} className="card-image" />
            <Card.Body>
              <Card.Title>Jhon Wick Chapter 4</Card.Title>
              <Card.Text className="text-sm">
              John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with..
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Recommended;
