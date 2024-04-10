import React from 'react';
import './tour.css';

const Tour = () => {
  const tourData = [
    {
      continent: "AFRICA",
      dates: [
        "01.04.15 Cape Town, ZA, Cape Town Stadium",
        "29.03.15 Johannesburg, ZA, FNB Stadium",
        // Rest of the tour dates in Africa...
      ]
    },
    {
      continent: "ASIA",
      dates: [
        "03.11.13 Tokyo, JP, Makuhari Messe",
        "02.11.13 Tokyo, JP, Makuhari Messe",
        // Rest of the tour dates in Asia...
      ]
    },
    {
      continent: "EUROPE",
      dates: [
       , "31.10.15Sheffield, GB, Motorpoint Arena",
"30.10.15Sheffield, GB, Motorpoint Arena",
"29.10.15Sheffield, GB, Motorpoint Arena",
"27.10.15Newcastle, GB, Metro Radio Arena",
"26.10.15Newcastle, GB, Metro Radio Arena",
"25.10.15Newcastle, GB, Metro Radio Arena",,
"22.10.15Belfast, GB, SSE Arena",
"21.10.15Belfast, GB, SSE Arena",
"20.10.15Belfast, GB, SSE Arena",
"18.10.15Dublin, IE, 3Arena",
"17.10.15Dublin, IE, 3Arena",
"16.10.15Dublin, IE, 3Arena",
"12.10.15Birmingham, GB, Barclaycard Arena",
"11.10.15Birmingham, GB, Barclaycard Arena",
"10.10.15Birmingham, GB, Barclaycard Arena",
"08.10.15Glasgow, GB, SSE Hydro Arena",
"07.10.15Glasgow, GB, SSE Hydro Arena",
"04.10.15Manchester, GB, Manchester Arena",
"03.10.15Manchester, GB, Manchester Arena",
"30.09.15London, GB, O2 Arena",
"29.09.15London, GB, O2 Arena",
"28.09.15London, GB, O2 Arena",
"26.09.15London, GB, O2 Arena",
"25.09.15London, GB, O2 Arena",
"24.09.15London, GB, O2 Arena",

      ]
    },
  ];

  const generateTourDates = () => {
    return (
      <div>
        {tourData.map((continentData, index) => (
          <div key={index}>
            <h2>{continentData.continent}</h2>
            <ul>
              {continentData.dates.map((date, idx) => (
                <li key={idx}>{date}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="tour-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1> Tours in the past</h1>
        <div className="tour-dates">
          {generateTourDates()}
        </div>
      </div>
    </div>
  );
};

export default Tour;
