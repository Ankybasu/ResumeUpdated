import React from "react";
import Bio from "./Bio";
import Experience from "./Experience";
import SideBar from "./SideBar";
import Skill from "./Skill";
import styles from "../customstyle.module.css";
import styled from "styled-components";

const HomePage = () => {
  const data = [
    {
      title: "1PRE, App Modernization, Wells Fargo account",
      designation: "Senior Software Developer",
      timeDate: "Dec 2023-April 2023",
      description:
        "This is a migration project where the legacy is in .aspx and the migrated technology we are using is Angular v15 and .NET Core. It is a complex rewrite application.",
    },
    {
      title: "CLDNM, Wells Fargo account",
      designation: "Software Developer",
      timeDate: "Jan 2023-March 2023",
      description:
        " a java migration project from spring to spring boot where it was migrated to cloud PCF setting UCD properties , redis implementation was done as well.",
    },
    ,
    {
      title: "EDELV, App Modernization, Wells Fargo account",
      designation: "Software Developer",
      timeDate: "Oct 2022-Dec2022",
      description:
        "This is a migration project as well where on the angular side was version upgrade and mainly changes were made in the angular.json, package.json and deprecated code conversion to updated version code changes.",
    },
    {
      title: "PYMTS, App Modernization, Wells Fargo account",
      designation: "Software Developer",
      timeDate: "May 2022-Sept 2022",
      description:
        "This is a migration project where we need to migrate the existing .net application to the angular technologies. Also, it was a complete rewrite application from the angular point of view. The application had multiple modules with inter-dependability which we have achieved by typescript coding.",
      bullets: [
        { str: "Functionality upgradation to angular technology" },
        { str: "Developing the design and layout of the application" },
        { str: "Following the Agile methodologies for development. " },
      ],
    },
  ];
  const H1 = styled.h1({
    fontSize: "1.15rem",
    textTransform: "uppercase",
    letterSpacing: "0.15rem",
    color: "#64B687",
    "&:before": {
      content: '" "',
      color: "#64b687",
      position: "relative",
      border: "2px solid",
      width: "10px",
      margin: "0.25rem",
    },
  });

  const H2 = styled.h2({
    fontSize: "1.0rem",
  });
  const H3 = styled.h3({
    fontSize: "0.75rem",
  });
  return (
    <>
      <div className={styles.mainContent}>
        <SideBar></SideBar>

        <div className="col-lg-9" style={{ margin: "40px", padding: "40px" }}>
          <Bio></Bio>
          <div style={{ display: "flex" }}>
            <div>
              <H1>Work Experiences</H1>
              {data.map((each: any) => {
                return (
                  <Experience
                    title={each.title}
                    description={each.description}
                    time={each.timeDate}
                    designation={each.designation}
                  ></Experience>
                );
              })}
            </div>
            <Skill></Skill>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
