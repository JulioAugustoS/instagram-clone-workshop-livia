import React from 'react';
import {View} from 'react-native';
import api from '../../services/api';

import {Image} from '../../components';

import {
  FeedList,
  Post,
  PostHeader,
  Avatar,
  Name,
  Description,
  Loading,
} from './styles';

const Feed = () => {
  const [feed, setFeed] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const loadFeed = async () => {
    setLoading(true);
    try {
      const find = await api.get('/posts/');

      setFeed(find?.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadFeed();
  }, []);

  const refreshFeed = async () => {
    setRefreshing(true);

    await loadFeed();

    setRefreshing(false);
  };

  return (
    <View>
      <FeedList
        data={feed}
        keyExtractor={(post) => String(post._id)}
        onRefresh={refreshFeed}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({item}) => (
          <Post>
            <PostHeader>
              <Avatar source={{uri: item.user.avatar}} />
              <Name>{item.user.name}</Name>
            </PostHeader>
            <Image
              smallSource={{uri: item.small}}
              aspectRatio={item.aspectRatio}
              source={{uri: item.image}}
            />
            <Description>
              <Name>{item.user.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
};

export default Feed;
