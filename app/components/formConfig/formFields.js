import hashtags from './hashtags';
import stores from './stores'

const formFields = [
  [
    {
    name: 'name',
    label: 'Recipe Name',
    type: 'text',
    required: true,
    fieldProps: {
      autoCorrect: false,
    },
    }
  ],
  [
    {
      name: 'ingredients',
      label: `Ingredients (e.g. 2 cups spinach, 1 tsp salt)`,
      type: 'text',
      fieldProps: {
        autoCorrect: false,
        // multiline: true,
      },
    },
  ], [
    {
      name: 'instructions',
      label: 'List Instructions Here',
      type: 'text',
      fieldProps: {
        autoCorrect: false,
        // multiline: true
      },
    },
  ],
  [
    {
      name: 'hashtags',
      placeholder: 'Pick hashtag',
      pickerItems: hashtags,
      type: 'picker',
    },
  ], [
    {
      name: 'source',
      placeholder: 'Primary Store',
      pickerItems: stores,
      type: 'picker',
    },
  ],
  [
    {
      name: 'postButton',
      label: 'Confirm Post',
      type: 'button',
      fieldProps: {
        submitOnDirty: true,
      },
    },
  ]
];

export default formFields;

/*

import subjectList from './__mockList';

const formFields = [
  [
    {
      name: 'name',
      label: 'Recipe Name',
      type: 'text',
      required: true,
      fieldProps: {
        autoCorrect: false,
      },
    },
    {
      name: 'lastName',
      label: 'Last Name',
      required: true,
      type: 'text',
      fieldProps: {
        autoCorrect: false,
      },
    },
  ],
  [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      fieldProps: {
        autoCorrect: false,
        autoCapitalize: 'none',
        keyboardType: 'email-address',
      },
    },
  ],
  [
    {
      name: 'subject',
      placeholder: 'Pick a topic of your interest',
      pickerItems: subjectList,
      type: 'picker',
    },
  ],
  [
    {
      name: 'password',
      label: 'Password',
      type: 'text',
      fieldProps: {
        secureTextEntry: true,
      },
    },
  ],
  [
    {
      name: 'subscribe',
      label: 'Subscribe me to weekly news from Tech world.',
      type: 'boolean',
      defaultValue: true,
    },
  ],
  [
    {
      name: 'signUpButton',
      label: 'Sign Up',
      type: 'button',
      fieldProps: {
        submitOnDirty: true,
      },
    },
  ],
  [
    {
      name: 'resetButton',
      label: 'Reset',
      type: 'button',
    },
  ],
];

export default formFields;
*/