import React, { useEffect, useState } from 'react';

import { View, Text } from 'react-native';
import { API } from '~/services';

const Home = () => {
  const [data, setData] = useState([]);

  const getSomeData = async () => {
    try {
      const result = await API.getDiscoveryMovies();
      console.warn(result?.data);
      setData(result?.data);
    } catch (error) {
      console.warn(error?.response.data);
    }
  };

  const getSomeData2 = async () => {
    try {
      const result = await API.getTrending();
      console.warn(result?.data);
      setData(result?.data);
    } catch (error) {
      console.warn(error?.response);
    }
  };

  const getSomeData3 = async () => {
    try {
      const result = await API.getMoviesGenresList();
      console.warn(result?.data);
      setData(result?.data);
    } catch (error) {
      console.warn(error?.response);
    }
  };

  const getSomeData4 = async () => {
    try {
      const result = await API.getMovieSearchResults({ query: 'deadpool' });
      console.warn(result?.data?.results);
      setData(result?.data);
    } catch (error) {
      console.warn(error?.message);
    }
  };

  useEffect(() => {
    // getSomeData();
    // getSomeData2();
    // getSomeData3();
    getSomeData4();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      {data?.genres?.map((item) => <Text key={item.id}>{item.name}</Text>)}
    </View>
  );
};

export default Home;
