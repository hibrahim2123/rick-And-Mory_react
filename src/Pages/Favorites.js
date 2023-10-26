import ConfirmBox from "../components/Cards/Dialog/ConfirmBox";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "../components/Cards/Cards.module.scss";
import { removeItem } from "../redux/Action";
const Favorites = () => {
  let favorites = useSelector((state) => state);
  let dispatch = useDispatch();
  let [open, setOpen] = useState(false);

  const unfavorite = async (id) => {
    if (favorites.length === 0) {
      setOpen(false);
    } else {
      let api = `https://rickandmortyapi.com/api/character/${id}`;
      let data = await fetch(api).then((res) => res.json());
      dispatch(removeItem(data));
      setOpen(false);
    }
  };
  const openSnackBar = () => {
    setOpen(true);
  };
  return (
    <div className="container">
      <h2
        style={{ textAlign: "center", marginBottom: "2rem", fontSize: "40px" }}
      >
        Favorites
      </h2>
      <div className="row">
        {favorites.map((item) => {
          let { id, image, name, location } = item;
          return (
            <div className="col-4">
              <div className="card my-2">
                <img src={image} alt="" className="card-img-top" />
                <div className={`${styles.content}`}>
                  <div className="fs-5 fw-bold mb-4">{name}</div>
                  <div className="">
                    <div className="fs-6 fw-normal">Last Location</div>
                    <div className="fs-5 d-flex ">
                      <p>{location.name}</p>
                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: "5rem", marginBottom: "1rem" }}
                        onClick={() => openSnackBar(true)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ConfirmBox
                open={open}
                closeDialog={() => setOpen(false)}
                deleteFunction={() => unfavorite(id)}
              ></ConfirmBox>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
