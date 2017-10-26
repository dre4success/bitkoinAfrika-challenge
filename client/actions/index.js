export const SAVE_FORM = 'save_form';

export const saveForm = (values) => {
  const json = JSON.stringify(values);
 const storage = localStorage.setItem('form', json)
  return {
    type: SAVE_FORM,
    payload: storage
  }
}