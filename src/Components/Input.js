import React, {Component} from 'react';
import { View, Animated, Easing } from 'react-native'
import { StyledInput, InputLabel } from './styledComponents';

const AnimatedLabel = Animated.createAnimatedComponent(InputLabel);
class Input extends Component {
    constructor(props) {
        super(props);
        this.state={
            isFocused: new Animated.Value(0),
            value: ''
        }
        this.focusValue = new Animated.Value(0)
        this.fontValue = new Animated.Value(0)
    }
    focus = (action) => {
        // this.focusValue.setValue(0)
        Animated.timing(
            this.fontValue,
            {
                toValue: action ? 1 : 0,
                duration: 100,
                easing: Easing.linear,
                // useNativeDriver: true
            }
        ).start();
        Animated.timing(
            this.focusValue,
            {
                toValue: action ? 1 : 0,
                duration: 100,
                easing: Easing.linear,
                // useNativeDriver: true
            }
        ).start()
        
    }
    handleChange = (text) => {
        this.setState({
            value: text
        })
    }
    render () {
        const { isFocused, value } = this.state
        const { label, labelProps } = this.props;
        
        const position = this.focusValue.interpolate({
            inputRange: [0, 1],
            outputRange: [14, -2]
        });

        const size = this.fontValue.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 12]
        })
        const labelColor = labelProps && labelProps.color ? labelProps.color : "#000000"
        console.log(position)
        console.log(size)
        // console.log(value.length)
        return (
            <View style={{width:'100%', marginTop:5, marginBottom:5}}>
                <AnimatedLabel style={{transform:[{translateY: position}], fontSize:size}} color={labelColor}>{label}</AnimatedLabel>
                <StyledInput onFocus={()=>this.focus(true)} onBlur={()=>String(value).length === 0 && this.focus(false)} onChangeText={(text)=>this.handleChange(text)}noBorder/>
            </View>
        )
    }
}

export default Input