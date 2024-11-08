import React, { useState } from 'react';
import { FormSection } from '../Components/FormSection.js';

export default function CreateCharacterPage() {
  const [isMulticlassed, setIsMulticlassed] = useState(false);

  return (
    <div className='listInfoAdd'>
      <FormSection
        isMulticlassed={isMulticlassed}
        onisMulticlassedChange={setIsMulticlassed}
      />
    </div>
  );
}
