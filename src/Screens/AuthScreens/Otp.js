import React, { Component } from 'react';
import {
  StatusBar, TouchableOpacity,
} from 'react-native';
import {
  MainView, NumberInput, StyledText, CircleButton
} from '../../Components/styledComponents';
import { BackArrow, ArrowForward } from '../../Components/icons';
import { styles } from '../../assets/style/style';

class Otp extends Component {
    static navigationOptions = {
      // headerStyle :{
      //     backgroundColor: '#abd136',
      //     elevation: 0,
      //     position: 'absolute'

      // },
      // headerTitle: <BackArrow color="#ffffff" style={{marginLeft: 20, marginTop: 30}}/>,
      header: null
    }

    constructor(props) {
      super(props);
      this.state = {
        otp: ''
      };
    }

    handleChange = (text) => {
      this.setState({ otp: text });
    }

    render() {
      const { navigation } = this.props;
      const { otp } = this.state;
      return (
        <MainView bg="#abd136" justify="center">
          <TouchableOpacity onPress={() => navigation.navigate('Phone')} style={styles.backButton}><BackArrow color="#ffffff" /></TouchableOpacity>
          <StatusBar backgroundColor="#abd136" barStyle="light-content" />
          <StyledText color="#ffffff" size="24px" width="80%" textAlign="center">Enter the One Time Password</StyledText>
          <NumberInput keyboardType="numeric" value={otp} onChangeText={text => this.handleChange(text)} />
          <CircleButton onPress={() => navigation.navigate('SignUp')}><ArrowForward color="#ffffff" /></CircleButton>
        </MainView>
      );
    }
}

export default Otp;
