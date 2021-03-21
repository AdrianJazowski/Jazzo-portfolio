/** @format */
import React, { useContext } from "react";
import PortfolioContext from "../../context";
import { StyledForm } from "./FiltrByProjectCategoryStyles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const FiltrByProjectCategory = () => {
  const value = useContext(PortfolioContext);
  const { projects, handleProjectCategory } = value;

  const categories = [
    "all",
    ...new Set(projects.map((category) => category.typeProject)),
  ];

  return (
    <StyledForm component="fieldset">
      <RadioGroup
        row
        aria-label="projects"
        name="projecys"
        onChange={handleProjectCategory}
      >
        {categories.map((category) => {
          return (
            <li key={category}>
              <FormControlLabel
                value={category}
                control={<Radio />}
                label={category}
              />
            </li>
          );
        })}
      </RadioGroup>
    </StyledForm>
  );
};

export default FiltrByProjectCategory;
