const images = [
  {
    _id: '100',
    url: `${process.env.PUBLIC_URL}/images/naruto.jpg`
  },
  {
    _id: '200',
    url: `${process.env.PUBLIC_URL}/images/awesome.jpg`
  },
  {
    _id: '100',
    url: `${process.env.PUBLIC_URL}/logo192.png`
  },
  {
    _id: '100',
    url: `${process.env.PUBLIC_URL}/images/head_band.jpg`
  },
  {
    _id: '100',
    url: `${process.env.PUBLIC_URL}/images/sideways.jpg`
  },
  // {
  //   _id: '100',
  //   url: `${process.env.PUBLIC_URL}/images/naruto.jpg`
  // },
  {
    _id: '100',
    url: `${process.env.PUBLIC_URL}/images/versus.jpg`
  }
];

const getImages = () => {
  return images.filter(image => image);
};

export default getImages;
