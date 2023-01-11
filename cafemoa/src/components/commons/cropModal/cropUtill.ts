export const base64toFile = (baseData: string, filename: string) => {
  // console.log(base_data, filename);
  const arr = baseData.split(",");
  if (arr[0] === null && /:(.*?);/.test(arr[0])) return;
  console.log(arr[0]);
  const mime = arr[0]?.match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n-- !== 0) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
