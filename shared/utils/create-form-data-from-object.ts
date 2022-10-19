/* eslint-disable @typescript-eslint/no-explicit-any */
type FormDataParams = Record<string, string | number | Record<string, any>>;

export function createFormDataFromObject(params: FormDataParams = {}): FormData {
  const formData = new FormData();
  Object.entries(params).forEach(([key, value]) => {
    if (value === void 1) {
      return;
    }
    let normalizedValue: string | Blob;

    if (value instanceof File) {
      formData.set(key, value);
      return;
    }

    if (typeof value === 'object') {
      normalizedValue = JSON.stringify(value);

      formData.set(key, normalizedValue);
      return;
    }

    normalizedValue = typeof value === 'number' ? value.toString() : value;
    formData.set(key, normalizedValue);
  });
  return formData;
}
