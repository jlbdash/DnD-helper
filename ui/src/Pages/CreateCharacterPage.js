import React, { useState } from 'react';
import { FormSection } from '../Components/FormSection.js';
import './FormStyles.css';

export default function CreateCharacter() {
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
