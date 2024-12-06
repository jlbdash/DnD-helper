import React from 'react';
import { IdeaSection } from '../Components/campaignIdeaSection';

export default function CampaignPage() {
  function handleStoryAdditions() {
    let title = document.getElementById('taskOrder');
    document.getElementById('storyTile').innerHTML = title;
  }

  // function submitter(newCharacter) {
  //   let fileLoad = aFiles;
  //   let title = document.getElementById("enterIdea").textContent;

  //   console.log('File check');
  //   // if more than one entry, continue; else push character
  //   if (checkFileLength !== 0) {
  //     let x = 0;
  //     while (x <= checkFileLength) {
  //       // end of file, no match, push character
  //       if (x > checkFileLength - 1) {
  //         fileLoad.push(newCharacter);
  //         console.log('Before Break 1');
  //         break;
  //       }
  //       // character username match, either update class or add character
  //       else if (newCharacter.username === fileLoad[x].username) {
  //         console.log('Updating Break');
  //         let len = fileLoad[x].character.length;
  //         newCharacter.character[0].id = len + 1;
  //         for (let characterX = 0; characterX < len; x++) {
  //           if (
  //             fileLoad[x].character[characterX]['name'] ===
  //             newCharacter.character[0]['name']
  //           ) {
  //             fileLoad[x].character[characterX]['class'] =
  //               newCharacter.character[0]['class'];
  //             break;
  //           }
  //         }
  //         break;
  //       } else {
  //         x++;
  //       }
  //     }
  //   } else {
  //     fileLoad.push(newCharacter);
  //   }

  //   console.log(fileLoad);
  //   fetch('http://localhost:4000/write', {
  //     method: 'POST',
  //     body: JSON.stringify(fileLoad),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   console.log('Pushed Story');

  //   fileLoad = JSON.stringify(fileLoad);
  //   if (fileLoad !== aFiles) {
  //     fetch('http://localhost:4000/push', {
  //       method: 'POST',
  //       body: JSON.stringify(newStory),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //   }
  // }

  return (
    <section>
      <div className="campaignOrder">
        <input
          id="enterIdea"
          style={{ padding: '10px', width: '500px' }}
          placeholder="Name your Adventure"
        />
        <input
          style={{ padding: '10px' }}
          type="submit"
          value="Submit"
          onClick={handleStoryAdditions}
        />
          <IdeaSection />
      </div>
    </section>
  );
}
