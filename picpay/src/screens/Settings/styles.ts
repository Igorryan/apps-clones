import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
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

export const AjudaLink = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

export const AjudaLinkLabel = styled.Text`
  color: #1ab563;
  font-size: 18px;
  padding: 0 10px;
  text-align: right;
`;

export const HeaderInfo = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Img = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 100px;
`;

export const IG = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Name = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
`;

export const Link = styled.TouchableOpacity``;

export const Text = styled.Text`
  margin-top: 5px;
  color: #1ab563;
`;

export const Options = styled.View``;

export const OptionTitle = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin: 10px 16px;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  background: #1f2229;
  padding: 12px 16px;
`;

export const OptionDescription = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  option: {
    borderBottomColor: 'rgba(255,255,255,.1)',
    borderBottomWidth: 0.6,
  },
});
