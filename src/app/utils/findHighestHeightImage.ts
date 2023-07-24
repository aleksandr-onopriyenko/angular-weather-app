export function findHighestHeightImage(images: any[]): any {
  let highestHeightObject = images[0];

  for (let i = 1; i < images.length; i++) {
    if (images[i].height > highestHeightObject.height) {
      highestHeightObject = images[i];
    }
  }

  return highestHeightObject;
}
