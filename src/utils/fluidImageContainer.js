// need to set outer container width

export const fluidImageContainer = (width, height = width) => {
  const percentage = (height / width) * 100;
  return {
    position: 'relative',
    width: '100%',
    height: '0',
    paddingBottom: `${percentage}%`
  };
};

export const fluidImageContent = () => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: '0',
  top: '0'
});
