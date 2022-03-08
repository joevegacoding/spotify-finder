import React, { useEffect, useState } from "react";
import { catchErrors } from "../utils";
import { getCurrentUserTopArtists } from "../spotify";
import {StyledRangeButtons} from "../styles"

const RangeButtons = ({ activeTimeRange, setActiveTimeRange }) => {
  return (

    <StyledRangeButtons>
        <li>
          <button
            className={activeTimeRange === "short" ? "active" : ""}
            onClick={() => setActiveTimeRange("short")}
          >
            This Month
          </button>
        </li>
        <li>
          <button
            className={activeTimeRange === "medium" ? "active" : ""}
            onClick={() => setActiveTimeRange("medium")}
          >
            Last six Months
          </button>
        </li>
        <li>
          <button
            className={activeTimeRange === "long" ? "active" : ""}
            onClick={() => setActiveTimeRange("long")}
          >
            All Time
          </button>
        </li>

      </StyledRangeButtons>
     
  );
};

export default RangeButtons;
