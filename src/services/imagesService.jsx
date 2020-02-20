const images = [
  {
    _id: '100',
    url: `${process.env.PUBLIC_URL}/images/naruto.jpg`
  },
  {
    _id: '200',
    url: `${process.env.PUBLIC_URL}/images/lion.jpg`
  }
];

const getImages = () => {
  return images.filter(image => image);
};

export default getImages;
