import styled from 'styled-components/native';

export const FeedList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Post = styled.View`
  margin-top: 10px;
`;

export const PostHeader = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#333',
})`
  margin: 30px 0;
`;

export const Actions = styled.View`
  flex-direction: row;
`;
