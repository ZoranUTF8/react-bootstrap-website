import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultStats } from "../../features/allEmployees/allEmployeesSlice";
import { ChartsContainers, DefaultStatsContainer } from "../Charts";

const Stats = () => {
  const dispatch = useDispatch();

  const { isGettingDefaultStats, monthlyApplication } = useSelector(
    (store) => store.allEmployees
  );

  useEffect(() => {
    dispatch(getDefaultStats());
  }, []);

  if (isGettingDefaultStats) {
    return (
      <div class="container fullPage d-flex align-items-center justify-content-center">
        <div class="jumbotron full-height-element d-flex align-items-center justify-content-center flex-column">
          <div class="spinner-border mb-3"></div>
          <h1>Loading</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container fullPage ">
        <h1 className="display-4">Stats</h1>
        <DefaultStatsContainer />
        {monthlyApplication.length > 0 && <ChartsContainers />}
       
      </div>
    );
  }
};

export default Stats;
