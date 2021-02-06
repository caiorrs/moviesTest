import { useSelector } from 'react-redux';

const useConfiguration = () => {
  const { configuration } = useSelector((state) => state.AppReducer);
  const {
    images: {
      base_url: baseURL,
      secure_base_url: imageBaseURL,
      backdrop_sizes: backdropSizes,
      logo_sizes: logoSizes,
      poster_sizes: posterSizes,
      profile_sizes: profileSizes,
      still_sizes: stillSizes,
    } = {},
  } = configuration || {};
  return {
    imageBaseURL,
    baseURL,
    backdropSizes,
    logoSizes,
    posterSizes,
    profileSizes,
    stillSizes,
  };
};

export default useConfiguration;
