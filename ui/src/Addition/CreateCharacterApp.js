import React, { useState } from 'react';
import './FormStyles.css';
import { FormSection } from './FormSection.js';

export default function CreateCharacter() {
  const [isMulticlassed, setIsMulticlassed] = useState(false);

  return (
    <div className='listInfo'>
      <FormSection
        isMulticlassed={isMulticlassed}
        onisMulticlassedChange={setIsMulticlassed}
      />
    </div>
  );
}
