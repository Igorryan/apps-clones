import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Wrapper = styled.View`
  flex: 1;
  background: #000;
`;

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
`;

export const ConfigLink = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

export const ConfigLinkLabel = styled.Text`
  color: #1ab563;
  font-size: 18px;
  padding: 0 10px;
  text-align: right;
`;

export const NotificationContainer = styled.ScrollView`
  flex: 1;
  background: #1f2229;
  padding: 0 10px;
`;

export const Notification = styled.TouchableOpacity`
  padding: 10px 0;
`;

export const NotificationMessage = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
`;

export const NotificationDate = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3px;
`;

export const styles = StyleSheet.create({
  notification: {
    borderBottomColor: 'rgba(255,255,255,.1)',
    borderBottomWidth: 1,
  },
});
