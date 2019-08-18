/**
 *
 * This file is to be used to perform all form validation.
 * It is keep apart on a different file for organization.
 * As validate is a JavaScript function, you can perform any kind of data manipulation/validation.
 * Return a object with errors by field.
 */

/**
 *
 * @param {*} { firstName, lastName, email, subject, password }
 * @returns errors: {}
 */
const validate = ({name, ingredients, instructions, hashtags, source}) => {
  const errors = {};

  if (!name.value) {
    errors.name = 'Recipe name is required';
  }
  if (!ingredients.value) {
    errors.ingredients = 'Ingredients arerequired';
  }

  if (!instructions.value) {
    errors.instructions = 'instructions are required';
  } 

  if (!hashtags.value) {
    errors.hashtags = 'A hashtags of interest is required.';
  }
  
  if (!source.value) {
    errors.source = 'A Primary store is required.';
  }

  return errors;
};

export default validate;