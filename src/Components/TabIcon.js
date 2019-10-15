import React from 'react';
import {
  View, Dimensions
} from 'react-native';
import {
  StyledText, Line
} from './styledComponents';
import { CartIcon, LocationIcon, NairaIcon, FlagIcon } from './icons';

const { width } = Dimensions.get('window');
const TabIcon = (props) => {
  const {
    title, icon, last, completed, active
  } = props;
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <StyledText color="#000000" size={15}>{title}</StyledText>
        <View style={{
          backgroundColor: '#ffffff',
          borderRadius: width / 16,
          borderColor: completed ? '#abd136' : '#b6b6b6',
          borderWidth: 2,
          width: width / 8,
          height: width / 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <View style={{
            backgroundColor: completed ? '#ffffff' : '#d3d3d3',
            borderRadius: width / 20,
            // eslint-disable-next-line no-nested-ternary
            borderColor: completed ? '#abd136' : active ? '#f58521' : '#b6b6b6',
            borderWidth: 2,
            width: width / 10,
            height: width / 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
          {
              title === 'Cart' &&
              <CartIcon size={22} color={completed ? '#abd136' : '#ffffff'} />
          }
          {
              title === 'Delivery' &&
              <LocationIcon size={22} color={completed ? '#abd136' : '#ffffff'} />
          }
          {
              title === 'Payment' &&
              <NairaIcon size={22} color={completed ? '#abd136' : '#ffffff'} />
          }
          {
              title === 'Order' &&
              <FlagIcon size={22} color={completed ? '#abd136' : '#ffffff'} />
          }
          </View>
        </View>
        <StyledText color="#ffffff" size={15}>{title}</StyledText>
      </View>
      {
    !last
    && <Line height={10} width={width / 8} connector border={completed ? '#abd136' : '#b6b6b6'} bg="#ffffff" style={{}} />
    }
    </View>
  );
};

export default TabIcon;
