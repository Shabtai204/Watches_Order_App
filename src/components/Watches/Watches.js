import WatchesSummary from "./WatchesSummary";
import AvailableWatches from "./AvailableWatches";
import { Fragment } from "react";

const Watches = () => {
  return (
    <Fragment>
      <WatchesSummary />
      <AvailableWatches />
    </Fragment>
  );
};

export default Watches;
