import React, { useState } from 'react';
import { FormSection } from '../Components/formSection.js';

export default function CreateCharacterPage() {
  const [isMulticlassed, setIsMulticlassed] = useState(false);

  return (
      <section>
        <div className="listInfoAdd">
          <FormSection
            isMulticlassed={isMulticlassed}
            onisMulticlassedChange={setIsMulticlassed}
          />
        </div>
      </section>
  );
}
