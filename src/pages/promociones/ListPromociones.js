import "./listPromociones.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import imageOferta from "../../assets/imageOferta.jpg";

export const ListPromociones = ({ promotion, showClick, textButton }) => {
  return (
    <>
      <Card
        style={{
          width: "20rem",
          height: "460px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={`http://localhost:4000/uploads/${promotion.avatar}`}
          style={{ height: "200px" }}
        />

        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card.Title
            style={{
              color: "black",
              fontFamily: "roboto",
              fontSize: "30px",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            {promotion.title}
          </Card.Title>
          <Card.Text
            style={{
              color: "black",
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: "inherit",
            }}
          >
            {promotion.description}
          </Card.Text>
          <Card.Text
            style={{
              color: "black",
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: "inherit",
            }}
          >
            {promotion.price}
          </Card.Text>
          <Card.Text
            style={{
              color: "black",
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: "inherit",
            }}
          >
            Se publico el:
            {new Date(promotion.date).toLocaleDateString()}
          </Card.Text>
        </Card.Body>
        <div>
          <Button
            variant="primary"
            onClick={showClick}
            style={{ fontFamily: "sans-serif" }}
          >
            {textButton}
          </Button>
        </div>
      </Card>
    </>
  );
};
