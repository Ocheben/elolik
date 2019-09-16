import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const MainView = styled.View`
    background-color: ${props => (props.bg ? props.bg : '#ffffff')};
    flex: 1;
    justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
    align-items: ${props => (props.align ? props.align : 'center')};
    padding-top: ${props => (props.vpadding ? props.vpadding : 0)};
    padding-bottom: ${props => (props.vpadding ? props.vpadding : 0)};
    padding-left: ${props => (props.hpadding ? props.hpadding : 0)};
    padding-right: ${props => (props.hpadding ? props.hpadding : 0)};
`;

export const BlockView = styled.View`
    background-color: ${props => (props.bg ? props.bg : 'transparent')};
    /* align-items: flex-start; */
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : 'auto')};
    flex: ${props => (props.flex ? props.flex : 1)};
    align-items: ${props => (props.align ? props.align : 'flex-start')};
    justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
    flex-direction: ${props => (props.flexD ? props.flexD : 'column')};
    padding-top: ${props => (props.vpadding ? props.vpadding : 0)};
    padding-bottom: ${props => (props.vpadding ? props.vpadding : 0)};
    padding-left: ${props => (props.hpadding ? props.hpadding : 0)};
    padding-right: ${props => (props.hpadding ? props.hpadding : 0)};
    
`;

export const GradientView = styled(LinearGradient)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: flex-end;
    padding-top: ${props => (props.vpadding ? props.vpadding : 10)};
    padding-bottom: ${props => (props.vpadding ? props.vpadding : 10)};
    padding-left: ${props => (props.hpadding ? props.hpadding : 10)};
    padding-right: ${props => (props.hpadding ? props.hpadding : 10)};
    margin-top: ${props => (props.vmargin ? props.vmargin : 0)};
    margin-bottom: ${props => (props.vmargin ? props.vmargin : 0)};
    margin-left: ${props => (props.hmargin ? props.hmargin : 0)};
    margin-right: ${props => (props.rmargin ? props.rmargin : 0)};
`;

export const ModalCard = styled.View`
    elevation: 5;
    background-color: ${props => (props.bg ? props.bg : '#ffffff')};
    justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
    align-items: ${props => (props.align ? props.align : 'center')};
    width: ${props => (props.width ? props.width : 70)};
    height: ${props => (props.height ? props.height : 70)};
    padding-top: ${props => (props.vpadding ? props.vpadding : 0)};
    padding-bottom: ${props => (props.vpadding ? props.vpadding : 0)};
    padding-left: ${props => (props.hpadding ? props.hpadding : 0)};
    padding-right: ${props => (props.hpadding ? props.hpadding : 0)};
    margin-top: ${props => (props.vmargin ? props.vmargin : 0)};
    margin-bottom: ${props => (props.vmargin ? props.vmargin : 10)};
    margin-left: ${props => (props.hmargin ? props.hmargin : 0)};
    margin-right: ${props => (props.rmargin ? props.rmargin : 0)};
    border-radius: ${props => (props.br ? props.br : 0)}
`;

export const Card = styled(ModalCard)`
    flex:${props => (props.flex || 1)};
`;

export const Line = styled.View`
    background-color: ${props => (props.bg ? props.bg : '#999999')};
    height: ${props => (props.height ? props.height : 1.5)};
    width: ${props => (props.width ? props.width : '40%')};
    margin-top: 10;
    margin-bottom: 10;
    border-width: ${props => (props.connector ? 1 : 0)};
    border-top-color: ${props => (props.border || '#999999')};
    border-bottom-color: ${props => (props.border || '#999999')};
    border-left-color: ${props => (props.connector ? '#ffffff' : '#999999')};
    border-right-color: ${props => (props.connector ? '#ffffff' : '#999999')};
`;
export const StyledInput = styled.TextInput`
    border: ${props => (props.noBorder ? 'none' : '1px solid #000000')};
    border-bottom-color: #999999;
    border-bottom-width: 1px;
    font-size: 18px;
    padding-bottom: 5;
    /* height: 30; */
    border-radius: 0;
    width: 100%;
    /* margin-top: 10; */
    /* margin-bottom: 10; */
`;

export const NumberInput = styled.TextInput`
    border: 1px solid #ffffff;
    border-radius: 10;
    width: 80%;
    margin-top: 10;
    margin-bottom: 10;
`;

export const StyledText = styled.Text`
    font-size: ${props => (props.size ? props.size : '25px')};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};
    color: ${props => (props.color ? props.color : '#ffffff')};
    width: ${props => (props.width ? props.width : 'auto')};
    text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`;
export const InputLabel = styled.Text`
    /* font-size: ${props => props.size}; */
    margin-bottom:0;
    color: ${props => (props.color ? props.color : '#ffffff')};
    text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
    /* transform: translate(0px, ${props => props.labelPosition}); */
    position: absolute
`;

export const CircleButton = styled.TouchableOpacity`
    border: 2px solid #ffffff;
    border-radius: 140;
    width: 70;
    position: absolute;
    bottom: 50;
    height: 70;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const StyledButton = styled.TouchableOpacity`
    /* border: 2px solid #ffffff; */
    border-radius: ${props => (props.borderR || props.curved ? 10 : 0)};
    width: ${props => (props.width ? props.width : '80%')};
    /* position: absolute;
    bottom: 50; */
    height: ${props => (props.height || 60)};
    background-color: ${props => (props.bg ? props.bg : 'transparent')};
    justify-content: center;
    align-items: center;
`;

export const LogoImg = styled.Image`
    height: 50;
    width: ${props => (props.width ? props.width : 'auto')};
    /* padding-top: 20; */
    margin-bottom: ${props => (props.bmargin ? props.bmargin : 0)};
`;

export const CategoryCard = styled.ImageBackground`
    height: ${props => (props.height ? props.height : 50)};
    width: ${props => (props.width ? props.width : 50)};
    margin-top: ${props => (props.vmargin ? props.vmargin : 0)};
    margin-bottom: ${props => (props.vmargin ? props.vmargin : 0)};
    elevation: 5;
`;

export const Circle = styled.View`
    background: ${props => (props.bg || '#ffffff')};
    border-radius: ${props => (props.borderR || 10)};
    border-color: ${props => (props.borderC || '#ffffff')};
    border-width: ${props => (props.borderW || 1)};
    width: ${props => (props.width || '15px')};
    height: ${props => (props.height || '15px')};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
`;
