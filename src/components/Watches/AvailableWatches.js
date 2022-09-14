import { useEffect, useState } from "react";
import classes from "./AvailableWatches.module.css";
import Card from "../UI/Card";
import WatchItem from "./WatchItem/WatchItem";

const AvailableWatches = () => {
  const [watches, setWatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchWatches = async () => {
      const response = await fetch(
        "https://react-http-47197-default-rtdb.firebaseio.com/watches.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedWatches = [];
      for (const key in responseData) {
        loadedWatches.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setWatches(loadedWatches);
      setIsLoading(false);
    };

    fetchWatches().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.watchesLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.watchesError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const watchesList = watches.map((watch) => (
    <WatchItem
      id={watch.id}
      key={watch.id}
      name={watch.name}
      description={watch.description}
      price={watch.price}
    />
  ));

  return (
    <section className={classes.watches}>
      <Card>
        <ul>{watchesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableWatches;
