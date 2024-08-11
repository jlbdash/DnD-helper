//Validations for Input for Addition Character Form

const userValidation = {
  name: 'user',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
};

// const nameValidation = {
//     label: 'Character Name: ',
//     name: 'name',
//     type: 'text',
//     id: 'name',
//     value: isName,
//     placeholder: 'character\'s name...',
//     validation: {
//       required: {
//         value: true,
//         message: 'required',
//       },
//       minLength: {
//         value: 1,
//         message: 'min 1 character',
//       },
//     },
//   };

//   const classValidation = {
//     label: 'Add Classes: ',
//     name: 'class',
//     type: 'text',
//     id: 'class',
//     value: isClass,
//     placeholder: 'character\'s class...',
//     validation: {
//       required: {
//         value: true,
//         message: 'required',
//       },
//       minLength: {
//         value: 6,
//         message: 'min 4 characters',
//       },
//     },
//   };

//   const levelValidation = {
//     label: 'level',
//     name: 'level',
//     type: 'number',
//     id: 'level',
//     value: classNumber,
//     placeholder: '2',
//     validation: {
//       required: {
//         value: true,
//         message: 'required',
//       },
//       notSelected: {
//         value: true,
//         message: 'number of classes',
//       },
//     },
//   };

//   const raceValidation = {
//     label: 'race',
//     name: 'race',
//     type: 'text',
//     id: 'race',
//     value: isRace,
//     placeholder: 'character\'s race...',
//     validation: {
//       required: {
//         value: true,
//         message: 'required',
//       },
//       minLength: {
//         value: 2,
//         message: 'min 2 characters',
//       },
//     },
//   };
