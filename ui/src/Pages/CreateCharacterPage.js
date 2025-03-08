import React, { useState } from 'react';
import { FormCharacterSection } from '../Components/formCharacterSection.js';
import { FormItemSection } from '../Components/formItemSection.js';

export default function CreateCharacterPage() {
  const [isMulticlassed, setIsMulticlassed] = useState(false);
  const [onisOwnedChange, setIsOwned] = useState(false);

  return (
    <section style={{ flexDirection: 'row', display: 'flex' }}>
      <div className="listInfoAdd">
        <h4 style={{ paddingLeft: '10px' }}>Add to the Character List</h4>
        <FormCharacterSection
          isMulticlassed={isMulticlassed}
          onisMulticlassedChange={setIsMulticlassed}
        />
      </div>

      <div style={{ paddingLeft: '100px' }} className="listInfoAdd">
        <h4 style={{ paddingLeft: '10px' }}>For the Item's Collection</h4>
        <FormItemSection
          isOwned={onisOwnedChange}
          onisOwnedChange={setIsOwned}
        />
      </div>
    </section>
  );
}
