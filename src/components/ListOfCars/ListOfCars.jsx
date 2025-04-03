import CarCard from "../CarCard/CarCard.jsx";
import s from "./ListOfCars.module.css";

export default function ListOfCars({ cars }) {
  if (!cars) return;

  const defaultImg = "../../img/default-photo.jpg";

  return (
    <ul className={s.listOfCars}>
      {cars.map(
        ({
          id,
          img,
          brand,
          model,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          mileage,
        }) => {
          const addres = address.split(",").slice(1, 3);
          const photo = img.length === 0 ? defaultImg : img;
          return (
            <li key={id} className={s.oneCard}>
              <CarCard
                id={id}
                img={photo}
                brand={brand}
                model={model}
                year={year}
                rentalPrice={rentalPrice}
                address={addres}
                rentalCompany={rentalCompany}
                type={type}
                mileage={mileage}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}
