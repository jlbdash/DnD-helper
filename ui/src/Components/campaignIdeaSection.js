import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import aFiles from '../StoryAdditions.json';
import { ButtonBox } from './campaignButtonBox';

export const IdeaSection = () => {
  return (
    <section className="idea-section">
      <ol className="title-list">
        {console.log(aFiles)}
        {aFiles.map((element, fileIndex) => (
          <li key={fileIndex} className="title-item">
            <strong>{element.title}</strong>

            {element.subtitle && element.subtitle.length + 1 > 0 && (
              <ol className="subtitle-list===">
                {element.subtitle.map((sub, subIndex) => (
                  <li key={subIndex} className="subtitle">
                    <span>{sub.text}</span>
                    {ButtonBox}

                    {console.log('details', sub.detail)}
                    {sub.detail && sub.detail.length + 1 > 0 && (
                      <ol className="detail-list">
                        {sub.detail.map((item, itemIndex) => (
                          <li key={itemIndex} className="detail">
                            <span>{item}</span>
                            {ButtonBox}
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
