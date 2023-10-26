import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/Action";
import ConfirmBox from "./Dialog/ConfirmBox";
const CardDetails = () => {
  let { id } = useParams();
  let favoriteArray = useSelector((state) => state);
  let dispatch = useDispatch();

  let [characterData, setCharacterData] = useState({});
  let [open, setOpen] = useState(false);
  let { name, location, origin, gender, image, status, species } =
    characterData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      await setCharacterData(data);
    })();
  }, [api]);

  const favorite = () => {
    if (favoriteArray.length > 9) {
      alert(
        "You should remove one of the favorite character from the list to add new one!"
      );
    } else {
      const isDuplicate = favoriteArray.some(
        (item) => item.id === characterData.id
      );
      if (isDuplicate) {
      } else {
        dispatch(addItem(characterData));
        alert("Character is added");
      }
    }
  };
  const openSnackBar = () => {
    setOpen(true);
  };
  const unfavorite = () => {
    if (favoriteArray.length === 0) {
      setOpen(false);
    } else {
      dispatch(removeItem(characterData));
      setOpen(false);
    }
  };
  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <button
            type="button"
            class="btn btn-success mx-5 my-2"
            onClick={favorite}
          >
            Favorite
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              openSnackBar();
            }}
          >
            Unfavorite
          </button>
          <ConfirmBox
            open={open}
            closeDialog={() => setOpen(false)}
            deleteFunction={unfavorite}
          ></ConfirmBox>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
