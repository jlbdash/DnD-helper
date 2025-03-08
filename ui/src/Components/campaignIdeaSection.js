import aFiles from '../StoryAdditions.json';
import { ButtonBox } from './campaignButtonBox';

// help from https://vishalkukreja.com/how-to-access-nested-arrays-and-objects-in-javascript/#:~:text=To%20iterate%20through%20a%20nested%20object%20in%20JavaScript%2C%20we%20can,through%20its%20key%2Dvalue%20pairs.
export const IdeaSection = () => {
  let plotBox = [];

  aFiles.forEach((element) => {
    let x = aFiles.length;

    for (let key in element) {
      if (typeof element[key] === 'object') {
        for (let nestedKey in element[key]) {
          if (typeof element[key][nestedKey] === 'object') {
            for (let lastKey in element[key][nestedKey]) {
              if (typeof element[key][nestedKey][lastKey] === 'object') {
                for (let detail in element[key][nestedKey][lastKey]) {
                  for (let lastDetail in element[key][nestedKey][lastKey][
                    detail
                  ]) {
                    // Detail
                    plotBox.push(
                      <div className="sectionOrder2">
                        <div>
                          {element[key][nestedKey][lastKey][detail][lastDetail]}
                        </div>
                        {ButtonBox}
                      </div>
                    );
                  }
                }
              } else {
                // Subsection
                plotBox.push(
                  <div className="sectionOrder">
                    <div>{element[key][nestedKey][lastKey]}</div>
                    {ButtonBox}
                  </div>
                );
                x--;
              }
            }
          }
        }
      } else {
        // Main
        plotBox.push(
          <div key={`section${x}`} id={`section${x}`} className="plotSection">
            <div>{element[key]}</div>
            {ButtonBox}
          </div>
        );
      }
      x--;
    }
  });

  return plotBox;
};
