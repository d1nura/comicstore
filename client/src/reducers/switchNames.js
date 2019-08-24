export const setNames = (arr, writer, penciler, coverArtist) => {
  for (let i in arr) {
    switch (arr[i].role) {
      case "writer":
        writer = arr[i].name;
        break;
      case "writer":
        writer = arr[i].name;
        break;
      case "colorist":
      case "colorist (cover)":
        coverArtist = arr[i].name;
        break;
      case "penciler":
      case "penciler (cover)":
        penciler = arr[i].name;
        console.log(arr[i].name);
        break;
    }
  }
  return writer, penciler, coverArtist;
};
